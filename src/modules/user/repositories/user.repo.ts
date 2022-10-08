import { UpdatePasswordDto } from '@modules/auth/dto';
import { IDatabaseErrorHandler } from '@modules/database-error-handler/database.error.handler.interface';
import {
  CreateUserDomainModel,
  UserDomainModel,
} from '@modules/user/domain.types/user';
import { IUserRepository } from '@modules/user/repositories/user.repo.interface';
import { Inject, Injectable } from '@nestjs/common';

/////////////////////////////////////////////////////

@Injectable()
export class UserRepository implements IUserRepository {
  /**
   *
   */

  private _userEntity: any;

  constructor(
    @Inject(IDatabaseErrorHandler)
    private _databaseErrorHandler: IDatabaseErrorHandler,
  ) {
    this._userEntity = {};
  }

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

  createUser(model: CreateUserDomainModel): Promise<UserDomainModel> {
    throw new Error('Method not implemented.');
  }
}
