import { IDatabaseErrorHandler } from '@modules/database-error-handler/database.error.handler.interface';
import { CreateUserEducationInstituteDto } from '@modules/education-institute/dto/request-dto/create.user.eduction.institute.dto';
import { IEductionInstituteRepository } from '@modules/education-institute/repositories/education.institute.interface';
import { Inject, Injectable } from '@nestjs/common';

/////////////////////////////////////////////////////

@Injectable()
export class EductionInstituteRepository
  implements IEductionInstituteRepository
{
  /**
   *
   */

  constructor(
    @Inject(IDatabaseErrorHandler)
    private _databaseErrorHandler: IDatabaseErrorHandler,
  ) {}

  async createEducationInstituteForUser(
    userId: string,
    educationInstituteId: string,
    dto: CreateUserEducationInstituteDto,
  ): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
