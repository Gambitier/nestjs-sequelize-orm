import { ISampleService } from '@modules/sample-module/services/sample.service.interface';
import { Injectable } from '@nestjs/common';

/////////////////////////////////////////////////////

@Injectable()
export class SampleService implements ISampleService {
  /**
   *
   */
  constructor() {
    //
  }

  async sampleMethod(): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
