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

  async createEducationInstitute(): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
