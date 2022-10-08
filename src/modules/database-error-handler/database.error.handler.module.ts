import { SequelizeDatabaseErrorHandlerProvider } from '@modules/database-error-handler/providers';
import { Global, Module } from '@nestjs/common';

@Global()
@Module({
  imports: [],
  controllers: [],
  providers: [SequelizeDatabaseErrorHandlerProvider],
  exports: [SequelizeDatabaseErrorHandlerProvider],
})
export class DatabaseErrorHandlerModule {}
