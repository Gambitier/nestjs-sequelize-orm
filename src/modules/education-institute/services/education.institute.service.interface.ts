///////////////////////////////////////////////////////////

import { CreateUserEducationInstituteDto } from '@modules/education-institute/dto/request-dto/create.user.eduction.institute.dto';

export const IEducationInstituteService = Symbol('IEducationInstituteService');

export interface IEducationInstituteService {
  createEducationInstituteForUser(
    userId: string,
    educationInstituteId: string,
    dto: CreateUserEducationInstituteDto,
  ): boolean | PromiseLike<boolean>;

  createEducationInstitute(): Promise<boolean>;
}
