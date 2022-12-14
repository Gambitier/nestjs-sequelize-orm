import { DatabaseModule } from '@modules/database/database.module';
import { EducationInstituteController } from '@modules/education-institute/controllers/education.institute.controller';
import { EductionInstituteRepositoryProvider } from '@modules/education-institute/repo.providers';
import { EducationInstituteServiceProvider } from '@modules/education-institute/service.providers';
import { Module } from '@nestjs/common';

@Module({
  imports: [DatabaseModule],
  controllers: [EducationInstituteController],
  providers: [
    EducationInstituteServiceProvider,
    EductionInstituteRepositoryProvider,
  ],
  exports: [EducationInstituteServiceProvider],
})
export class EducationInstituteModule {}
