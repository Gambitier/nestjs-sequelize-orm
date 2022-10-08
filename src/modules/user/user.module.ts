import { UserRepositoryProvider } from '@modules/user/repo.providers';
import { UserServiceProvider } from '@modules/user/service.providers';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [],
  providers: [UserServiceProvider, UserRepositoryProvider],
  exports: [UserServiceProvider],
})
export class UserModule {}
