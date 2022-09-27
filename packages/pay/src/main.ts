import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { hello } from '@rumble/common';

console.log(hello());

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
