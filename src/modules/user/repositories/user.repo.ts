import { UserRoleEnum } from '@modules/auth/common';
import { UpdatePasswordDto } from '@modules/auth/dto';
import { IDatabaseErrorHandler } from '@modules/database-error-handler/database.error.handler.interface';
import { User } from '@modules/database/entities/user.entity';
import {
  CreateUserDomainModel,
  UserDomainModel,
} from '@modules/user/domain.types/user';
import { UserRoleDomainModel } from '@modules/user/domain.types/user.role/user.role.domain.model';
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

  async createUser(user: CreateUserDomainModel): Promise<UserDomainModel> {
    try {
      const data: User = await User.create<User>(user);

      const userRole: UserRoleDomainModel = {
        id: 'TODO',
        role: UserRoleEnum.USER,
        userId: 'TODO',
        createdAt: new Date(),
      };

      const domainModel: UserDomainModel = {
        id: data.id,
        prefix: data.prefix,
        firstName: data.firstName,
        middleName: data.middleName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        password: data.password,
        gender: data.gender as GenderEnum,
        dateOfBirth: undefined,
        createdAt: undefined,
        userRoles: [userRole],
      };

      return domainModel;
    } catch (err) {
      console.error(err.message);
    }
  }
}
