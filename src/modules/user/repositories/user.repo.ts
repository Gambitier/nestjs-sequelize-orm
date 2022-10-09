import { UserRoleEnum } from '@modules/auth/common';
import { UpdatePasswordDto } from '@modules/auth/dto';
import { IDatabaseErrorHandler } from '@modules/database-error-handler/database.error.handler.interface';
import { Database } from '@modules/database/database.providers';
import { User } from '@modules/database/entities/user.entity';
import {
  UserRole,
  UserRoleCreationAttributes,
} from '@modules/database/entities/userRole.entity';
import {
  CreateUserDomainModel,
  UserDomainModel,
} from '@modules/user/domain.types/user';
import { GenderEnum } from '@modules/user/enums/gender.enum';
import { IUserRepository } from '@modules/user/repositories/user.repo.interface';
import { Inject, Injectable } from '@nestjs/common';
import { Transaction } from 'sequelize';

/////////////////////////////////////////////////////
type UserCreateDomainModelWithoutUserRoles = Omit<
  CreateUserDomainModel,
  'userRoles'
>;

@Injectable()
export class UserRepository implements IUserRepository {
  /**
   *
   */

  constructor(
    // TODO why injection is not working
    // @Inject(USER_REPOSITORY) private readonly User: typeof User,
    @Inject(IDatabaseErrorHandler)
    private _databaseErrorHandler: IDatabaseErrorHandler,
  ) {}

  updatePassword(
    userId: string,
    updatePasswordDto: UpdatePasswordDto,
  ): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  findFirstByIdOrThrow(userId: string): Promise<UserDomainModel> {
    throw new Error('Method not implemented.');
  }

  findFirstByEmailOrThrow(email: string): Promise<UserDomainModel> {
    throw new Error('Method not implemented.');
  }

  async createUser(
    userCreateDomainModel: CreateUserDomainModel,
  ): Promise<UserDomainModel> {
    const roles = userCreateDomainModel.userRoles.map((userRole) => {
      const dateTimeNow = new Date();
      const role: UserRoleCreationAttributes = {
        role: userRole as string,
        userId: null,
        createdAt: dateTimeNow,
        updatedAt: dateTimeNow,
      };

      return role;
    });

    delete userCreateDomainModel.userRoles;
    // UserCreationAttributes is equivalent/same as UserCreateDomainModelWithoutUserRoles
    const userCreateArgs =
      userCreateDomainModel as UserCreateDomainModelWithoutUserRoles;

    const sequelize = await Database.instance().getSequelizeInstance();

    let user: User;
    try {
      await sequelize.transaction(async (transaction: Transaction) => {
        user = await this.createUserWithUserRoles(
          user,
          userCreateArgs,
          transaction,
          roles,
        );
      });
    } catch (err) {
      this._databaseErrorHandler.HandleError(err);
    }

    const domainModel: UserDomainModel = {
      ...user['dataValues'],
      gender: user.gender as GenderEnum,
      userRoles: user.userRoles.map((role) => {
        return {
          ...role['dataValues'],
          role: role.role as UserRoleEnum,
        };
      }),
    };

    return domainModel;
  }

  private async createUserWithUserRoles(
    user: User,
    userCreateArgs: UserCreateDomainModelWithoutUserRoles,
    transaction: Transaction,
    roles: UserRoleCreationAttributes[],
  ) {
    user = await User.create<User>(userCreateArgs, {
      transaction,
    });

    // for any errors, transaction will be rolled back
    // if (user) {
    //   throw new Error('temp');
    // }
    roles.forEach((role) => {
      role.userId = user.id;
    });

    user.userRoles = await UserRole.bulkCreate(roles, {
      transaction,
    });

    // ================= Alternative to bulkCreate ==================
    // https://github.com/sequelize/sequelize-typescript/#type-safe-usage-of-auto-generated-functions
    // === But this returned object instead of array of userRoles ===
    // const userRolesData = await user.$add(
    //   'userRoles',
    //   roles.map((item) => new UserRole({ ...item })),
    //   { transaction },
    // );
    // user.userRoles = userRolesData as UserRole[];
    // ==============================================================
    return user;
  }
}
