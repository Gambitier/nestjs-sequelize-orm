import { APIResponse } from '@common/types';
import { AllowAnonymous } from '@modules/auth/common';
import { ISampleService } from '@modules/sample-module/services';
import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
} from '@nestjs/common';
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

  @AllowAnonymous() // pass jwt authentication
  @HttpCode(HttpStatus.CREATED)
  @Post('/test-endpoint-name')
  async testEndpointName(@Body() dto: { name: string }): Promise<APIResponse> {
    const apiResponse: APIResponse = {
      message: '',
      data: undefined,
    };

    return apiResponse;
  }
}
