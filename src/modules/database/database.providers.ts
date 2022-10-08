import {
  DEVELOPMENT,
  PRODUCTION,
  SEQUELIZE,
  TEST,
} from '@modules/database/constants';
import { User } from '@modules/database/entities/user.entity';
import { Sequelize } from 'sequelize-typescript';
import { databaseConfig } from './database.config';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case TEST:
          config = databaseConfig.test;
          break;
        case PRODUCTION:
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize(config);
      sequelize.addModels([User]); //models goes here
      await sequelize.sync();
      return sequelize;
    },
  },
];
