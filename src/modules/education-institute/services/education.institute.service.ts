import { CreateUserEducationInstituteDto } from '@modules/education-institute/dto/request-dto/create.user.eduction.institute.dto';
import { IEductionInstituteRepository } from '@modules/education-institute/repositories/education.institute.interface';
import { IEducationInstituteService } from '@modules/education-institute/services/education.institute.service.interface';
import { Inject, Injectable } from '@nestjs/common';

/////////////////////////////////////////////////////

@Injectable()
export class EducationInstituteService implements IEducationInstituteService {
  /**
   *
   */
  constructor(
    @Inject(IEductionInstituteRepository)
    private readonly _eductionInstituteRepository: IEductionInstituteRepository,
  ) {
    //
  }

  async createEducationInstituteForUser(
    userId: string,
    educationInstituteId: string,
    dto: CreateUserEducationInstituteDto,
  ): Promise<boolean> {
    await this._eductionInstituteRepository.createEducationInstituteForUser(
      userId,
      educationInstituteId,
      dto,
    );

    return true;
  }

  async createEducationInstitute(): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
