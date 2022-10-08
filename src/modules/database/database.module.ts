import { databaseProviders } from '@modules/database/database.providers';
import { UserEntityProvider } from '@modules/database/entity.providers';
import { Module } from '@nestjs/common';

@Module({
  providers: [...databaseProviders, UserEntityProvider],
  exports: [...databaseProviders, UserEntityProvider],
})
export class DatabaseModule {}
