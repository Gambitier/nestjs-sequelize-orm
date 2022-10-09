import { UpdatePasswordDto } from '@modules/auth/dto';
import { CreateUserEducationInstituteDto } from '@modules/education-institute/dto/request-dto/create.user.eduction.institute.dto';
import { IEducationInstituteService } from '@modules/education-institute/services';
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
    @Inject(IEducationInstituteService)
    private readonly _educationInstituteService: IEducationInstituteService,
    @Inject(IUserRepository)
    private readonly _userRepository: IUserRepository,
  ) {
    //
  }

  async createUserEducationInstitute(
    userId: string,
    educationInstituteId: string,
    dto: CreateUserEducationInstituteDto,
  ): Promise<boolean> {
    const created: boolean =
      await this._educationInstituteService.createEducationInstituteForUser(
        userId,
        educationInstituteId,
        dto,
      );

    return created;
  }

  resetUserPassword(
    updatePasswordDto: UpdatePasswordDto,
    userId: string,
  ): Promise<boolean> {
    return this._userRepository.updatePassword(userId, updatePasswordDto);
  }

  findFirstByIdOrThrow(userId: string): Promise<UserDomainModel> {
    return this._userRepository.findFirstByIdOrThrow(userId);
  }

  findFirstByEmailOrThrow(email: string): Promise<UserDomainModel> {
    return this._userRepository.findFirstByEmailOrThrow(email);
  }

  createUser(model: CreateUserDomainModel): Promise<UserDomainModel> {
    return this._userRepository.createUser(model);
  }
}
