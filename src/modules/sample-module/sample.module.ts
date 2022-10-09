import { SampleController } from '@modules/sample-module/controllers/sample.controller';
import { SampleServiceProvider } from '@modules/sample-module/service.providers';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [SampleController],
  providers: [SampleServiceProvider],
  exports: [SampleServiceProvider],
})
export class SampleModule {}
