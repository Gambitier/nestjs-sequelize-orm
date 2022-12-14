import { APIResponse } from '@common/types';
import { JwtUserData } from '@modules/auth/types/jwt.user.data.type';
import { CreateUserEducationInstituteDto } from '@modules/education-institute/dto/request-dto/create.user.eduction.institute.dto';
import { IUserService } from '@modules/user/services/user.service.interface';
import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Inject,
  Param,
  Post,
  Request,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

/////////////////////////////////////////////////////////////////////////

@ApiBearerAuth()
@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(
    @Inject(IUserService)
    private readonly _userService: IUserService,
  ) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('/education-institute/:educationInstituteId')
  async createUserEducationInstitute(
    @Request() req,
    @Param('educationInstituteId') educationInstituteId: string,
    @Body() dto: CreateUserEducationInstituteDto,
  ): Promise<APIResponse> {
    const user = req.user as JwtUserData;

    const isCreated: boolean =
      await this._userService.createUserEducationInstitute(
        user.id,
        educationInstituteId,
        dto,
      );

    const apiResponse: APIResponse = {
      message: 'Added eduction information to user!',
      data: {
        status: isCreated,
      },
    };

    return apiResponse;
  }
}
