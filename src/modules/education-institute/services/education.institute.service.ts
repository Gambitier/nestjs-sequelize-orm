import { CreateUserEducationInstituteDto } from '@modules/education-institute/dto/request-dto/create.user.eduction.institute.dto';
import { IEducationInstituteService } from '@modules/education-institute/services/education.institute.service.interface';
import { Injectable } from '@nestjs/common';

/////////////////////////////////////////////////////

@Injectable()
export class EducationInstituteService implements IEducationInstituteService {
  /**
   *
   */
  constructor() {
    //
  }

  async createEducationInstituteForUser(
    userId: string,
    educationInstituteId: string,
    dto: CreateUserEducationInstituteDto,
  ): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  async createEducationInstitute(): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
