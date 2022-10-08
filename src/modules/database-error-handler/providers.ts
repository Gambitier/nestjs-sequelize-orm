import { IDatabaseErrorHandler } from '@modules/database-error-handler/database.error.handler.interface';
import { SequelizeDatabaseErrorHandler } from '@modules/database-error-handler/sequelize/sequelize.error.handler';
import { Provider } from '@nestjs/common';

export const SequelizeDatabaseErrorHandlerProvider: Provider = {
  provide: IDatabaseErrorHandler,
  useClass: SequelizeDatabaseErrorHandler,
};
