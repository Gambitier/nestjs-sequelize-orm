import { IEducationInstituteService } from '@modules/education-institute/services';
import { Controller, Inject } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

/////////////////////////////////////////////////////////////////////////

@ApiBearerAuth()
@ApiTags('education-institutes')
@Controller('education-institutes')
export class EducationInstituteController {
  constructor(
    @Inject(IEducationInstituteService)
    private readonly educationInstituteService: IEducationInstituteService,
  ) {}
}
