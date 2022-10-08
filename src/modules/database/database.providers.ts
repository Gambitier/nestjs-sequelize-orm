import {
  DEVELOPMENT,
  PRODUCTION,
  SEQUELIZE,
  TEST,
} from '@modules/database/constants';
import { IDatabaseConfig } from '@modules/database/interfaces/IDbConfig';
import { Sequelize } from 'sequelize-typescript';
import * as databaseConfig from './database.config';

const dbConfig = databaseConfig as unknown as IDatabaseConfig;

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
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
      const sequelize = new Sequelize(config);
      sequelize.addModels([__dirname + '/entities']); //models goes here
      // About sequelize.sync
      // https://stackoverflow.com/a/39689092/7039250
      await sequelize.sync({ force: false });
      return sequelize;
    },
  },
];
