"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const PORT = 3001;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    await app.listen(PORT);
    console.log(`-----Nest App is listen on port ${PORT}-----`);
}
bootstrap();
//# sourceMappingURL=main.js.map