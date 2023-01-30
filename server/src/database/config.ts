import * as dotenv from 'dotenv';

dotenv.config();

const config = {
  APP_URL: process.env.APP_URL || 'http://localhost:3001',
  DB_NAME: process.env.MYSQL_DB || 'demo_rxjs',
  DB_HOST: process.env.MYSQL_HOST || 'localhost',
  DB_PORT: Number(process.env.MYSQL_PORT) || 3306,
  DB_USER: process.env.MYSQL_USER || 'root',
  DB_PASSWORD: process.env.MYSQL_PASSWORD,
};

export { config };
