import { ISampleService } from '@modules/sample-module/services';
import { SampleService } from '@modules/sample-module/services/sample.service';
import { Provider } from '@nestjs/common';

export const SampleServiceProvider: Provider = {
  provide: ISampleService,
  useClass: SampleService,
};
