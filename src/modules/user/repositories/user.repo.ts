import { UserRoleEnum } from '@modules/auth/common';
import { UpdatePasswordDto } from '@modules/auth/dto';
import { IDatabaseErrorHandler } from '@modules/database-error-handler/database.error.handler.interface';
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
/////////////////////////////////////////////////////

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
    const userCreateArgs = userCreateDomainModel as Omit<
      CreateUserDomainModel,
      'userRoles'
    >;

    let user: User;
    try {
      user = await User.create<User>(userCreateArgs);
      roles.forEach((role) => {
        role.userId = user.id;
      });
      user.userRoles = await UserRole.bulkCreate(roles);
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
}
