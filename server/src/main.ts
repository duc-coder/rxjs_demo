import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = 3001;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  await app.listen(PORT);

  console.log(`-----Nest App is listen on port ${PORT}-----`);
}
bootstrap();
