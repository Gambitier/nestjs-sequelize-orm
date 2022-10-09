import { ISampleService } from '@modules/sample-module/services';
import { Controller, Inject } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

/////////////////////////////////////////////////////////////////////////

@ApiBearerAuth()
@ApiTags('sample-endpoint-name')
@Controller('sample-endpoint-name')
export class SampleController {
  constructor(
    @Inject(ISampleService)
    private readonly sampleService: ISampleService,
  ) {}
}
