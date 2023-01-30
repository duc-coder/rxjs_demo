"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv = require("dotenv");
dotenv.config();
const config = {
    APP_URL: process.env.APP_URL || 'http://localhost:3001',
    DB_NAME: process.env.MYSQL_DB || 'demo_rxjs',
    DB_HOST: process.env.MYSQL_HOST || 'localhost',
    DB_PORT: Number(process.env.MYSQL_PORT) || 3306,
    DB_USER: process.env.MYSQL_USER || 'root',
    DB_PASSWORD: process.env.MYSQL_PASSWORD,
};
exports.config = config;
//# sourceMappingURL=config.js.map