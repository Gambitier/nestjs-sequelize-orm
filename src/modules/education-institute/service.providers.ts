import { IEducationInstituteService } from '@modules/education-institute/services';
import { EducationInstituteService } from '@modules/education-institute/services/education.institute.service';
import { Provider } from '@nestjs/common';

export const EducationInstituteServiceProvider: Provider = {
  provide: IEducationInstituteService,
  useClass: EducationInstituteService,
};
