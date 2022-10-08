import { IDatabaseErrorHandler } from '@modules/database-error-handler/database.error.handler.interface';
import { DataNotFoundError } from '@modules/database-error-handler/errors';
import { Injectable } from '@nestjs/common';

/////////////////////////////////////////////////////////////////////

@Injectable()
export class SequelizeDatabaseErrorHandler implements IDatabaseErrorHandler {
  HandleError(error: any): void {
    this.HandleSequelizeErrors(error);
  }

  HandleSequelizeErrors = (error: any) => {
    if (error.name === 'NotFoundError') {
      throw new DataNotFoundError(error.message);
    }

    throw error;
  };
}
