import { UpdatePasswordDto } from '@modules/auth/dto';
import { CreateUserEducationInstituteDto } from '@modules/education-institute/dto/request-dto/create.user.eduction.institute.dto';
import {
  CreateUserDomainModel,
  UserDomainModel,
} from '@modules/user/domain.types/user';

///////////////////////////////

export const IUserService = Symbol('IUserService');

export interface IUserService {
  createUserEducationInstitute(
    userId: string,
    educationInstituteId: string,
    dto: CreateUserEducationInstituteDto,
  ): Promise<boolean>;

  resetUserPassword(
    resetPasswordDto: UpdatePasswordDto,
    id: string,
  ): Promise<boolean>;

  createUser(model: CreateUserDomainModel): Promise<UserDomainModel>;

  findFirstByIdOrThrow(userId: string): Promise<UserDomainModel>;

  findFirstByEmailOrThrow(email: string): Promise<UserDomainModel>;
}
