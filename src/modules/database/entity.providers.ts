import { USER_REPOSITORY } from '@modules/database/constants';
import { User } from '@modules/database/entities/user.entity';
import { Provider } from '@nestjs/common';

export const UserEntityProvider: Provider = {
  provide: USER_REPOSITORY,
  useClass: User,
};
