import { IDatabaseConfig } from '@modules/database/interfaces/IDbConfig';
import * as dotenv from 'dotenv';

dotenv.config();
console.log('================DATABASE CONFIGS====================\n');
console.dir(
  {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME_DEVELOPMENT,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
  },
  { depth: null },
);

const databaseConfig: IDatabaseConfig = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME_DEVELOPMENT,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT, ///* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME_TEST,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT, ///* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME_PRODUCTION,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT, ///* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  },
};

module.exports = databaseConfig;
