import { DatabaseModule } from '@modules/database/database.module';
import { UserController } from '@modules/user/controllers/user.controller';
import { UserRepositoryProvider } from '@modules/user/repo.providers';
import { UserServiceProvider } from '@modules/user/service.providers';
import { Module } from '@nestjs/common';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserServiceProvider, UserRepositoryProvider],
  exports: [UserServiceProvider],
})
export class UserModule {}
