import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsString } from 'class-validator';

export class CreateUserEducationInstituteDto {
  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  startDate: Date;

  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  endDate: Date;

  @ApiProperty()
  @IsString()
  degree: string;
}
