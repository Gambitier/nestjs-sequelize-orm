import {
  DEVELOPMENT,
  PRODUCTION,
  SEQUELIZE,
  TEST,
} from '@modules/database/constants';
import { User } from '@modules/database/entities/user.entity';
import { UserRole } from '@modules/database/entities/userRole.entity';
import { IDatabaseConfig } from '@modules/database/interfaces/IDbConfig';
import { Sequelize } from 'sequelize-typescript';
import * as databaseConfig from './database.config';

const dbConfig = databaseConfig as unknown as IDatabaseConfig;

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      const sequelize = await Database.instance().getSequelizeInstance();
      return sequelize;
    },
  },
];

export class Database {
  /**
   *
   */
  private static _instance: Database = null;
  private _sequelize: Sequelize = null;

  constructor() {
    //
  }

  public static instance(): Database {
    return this._instance || (this._instance = new this());
  }

  getSequelizeInstance = async () => {
    if (this._sequelize) {
      return this._sequelize;
    }

    let config;
    switch (process.env.NODE_ENV) {
      case DEVELOPMENT:
        config = dbConfig.development;
        break;
      case TEST:
        config = dbConfig.test;
        break;
      case PRODUCTION:
        config = dbConfig.production;
        break;
      default:
        config = dbConfig.development;
    }

    this._sequelize = new Sequelize({
      ...config,
      // TODO https://github.com/sequelize/sequelize-typescript#model-path-resolving
      // models: [__dirname + '/entities/*.entity.ts'],
      // modelMatch: (filename, member) => {
      //   return (
      //     filename.substring(0, filename.indexOf('.entity')) ===
      //     member.toLowerCase()
      //   );
      // },
      models: [User, UserRole],
    });

    // About sequelize.sync
    // https://stackoverflow.com/a/39689092/7039250
    await this._sequelize.sync({ force: false });

    return this._sequelize;
  };
}
