///////////////////////////////

import { CreateUserEducationInstituteDto } from '@modules/education-institute/dto/request-dto/create.user.eduction.institute.dto';

export const IEductionInstituteRepository = Symbol(
  'IEductionInstituteRepository',
);

export interface IEductionInstituteRepository {
  createEducationInstituteForUser(
    userId: string,
    educationInstituteId: string,
    dto: CreateUserEducationInstituteDto,
  ): unknown;
}
