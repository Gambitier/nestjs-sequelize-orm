import { IDatabaseErrorHandler } from '@modules/database-error-handler/database.error.handler.interface';
import { UniqueConstraintFailedError } from '@modules/database-error-handler/errors';
import { Injectable } from '@nestjs/common';
import { UniqueConstraintError } from 'sequelize';

/////////////////////////////////////////////////////////////////////

@Injectable()
export class SequelizeDatabaseErrorHandler implements IDatabaseErrorHandler {
  HandleError(error: any): void {
    this.HandleSequelizeErrors(error);
  }

  HandleSequelizeErrors = (error: any) => {
    if (error instanceof UniqueConstraintError) {
      const fields = Object.keys(error.fields).join();
      const msg = `${fields} already in use`;
      throw new UniqueConstraintFailedError(fields, msg);
    }

    throw error;
  };
}
