import { IDatabaseErrorHandler } from '@modules/database-error-handler/database.error.handler.interface';
import { UniqueConstraintFailedError } from '@modules/database-error-handler/errors';
import { ForeignKeyConstraintFailedError } from '@modules/database-error-handler/errors/foreignKey.constraint.failed.error';
import { Injectable } from '@nestjs/common';
import { ForeignKeyConstraintError, UniqueConstraintError } from 'sequelize';

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
    } else if (error instanceof ForeignKeyConstraintError) {
      const msg = 'foreign key error occured';
      throw new ForeignKeyConstraintFailedError('fields', msg);
    }

    throw error;
  };
}
