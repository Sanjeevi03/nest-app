import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app/app.module';

import ('dotenv')
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port  = process.env.PORT || 3000
  await app.listen(port);
  Logger.log(`🚀 Application is running on: http://localhost:${port}`);
}
bootstrap();
