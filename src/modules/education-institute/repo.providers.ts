import { IEductionInstituteRepository } from '@modules/education-institute/repositories/education.institute.interface';
import { EductionInstituteRepository } from '@modules/education-institute/repositories/education.institute.repo';
import { Provider } from '@nestjs/common';

export const EductionInstituteRepositoryProvider: Provider = {
  provide: IEductionInstituteRepository,
  useClass: EductionInstituteRepository,
};
