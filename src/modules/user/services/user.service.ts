import { UpdatePasswordDto } from '@modules/auth/dto';
import { CreateUserEducationInstituteDto } from '@modules/education-institute/dto/request-dto/create.user.eduction.institute.dto';
import {
  CreateUserDomainModel,
  UserDomainModel,
} from '@modules/user/domain.types/user';
import { IUserRepository } from '@modules/user/repositories/user.repo.interface';
import { IUserService } from '@modules/user/services/user.service.interface';
import { Inject, Injectable } from '@nestjs/common';

/////////////////////////////////////////////////////

@Injectable()
export class UserService implements IUserService {
  /**
   *
   */
  constructor(
    @Inject(IUserRepository)
    private userRepository: IUserRepository,
  ) {
    //
  }

  async createUserEducationInstitute(
    educationInstituteId: string,
    dto: CreateUserEducationInstituteDto,
  ): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  resetUserPassword(
    updatePasswordDto: UpdatePasswordDto,
    userId: string,
  ): Promise<boolean> {
    return this.userRepository.updatePassword(userId, updatePasswordDto);
  }

  findFirstByIdOrThrow(userId: string): Promise<UserDomainModel> {
    return this.userRepository.findFirstByIdOrThrow(userId);
  }

  findFirstByEmailOrThrow(email: string): Promise<UserDomainModel> {
    return this.userRepository.findFirstByEmailOrThrow(email);
  }

  createUser(model: CreateUserDomainModel): Promise<UserDomainModel> {
    return this.userRepository.createUser(model);
  }
}
