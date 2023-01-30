"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionConfig = void 0;
const config_1 = require("./config");
exports.connectionConfig = {
    type: 'mysql',
    host: config_1.config.DB_HOST,
    port: config_1.config.DB_PORT,
    username: config_1.config.DB_USER,
    password: config_1.config.DB_PASSWORD,
    database: config_1.config.DB_NAME,
    synchronize: false,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
};
//# sourceMappingURL=typeorm.provider.js.map