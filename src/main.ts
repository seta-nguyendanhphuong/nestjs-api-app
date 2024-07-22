import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/**
 * nest g module user
 *
 */

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable cors
  app.enableCors();

  await app.listen(3000);
}
bootstrap();
