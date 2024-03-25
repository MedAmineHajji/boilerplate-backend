import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as express from 'express';

const port = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //enabling cors
  app.enableCors();

  // Set the maximum request size to 10 MB (adjust as needed)
  app.use(express.json({ limit: '5mb' }));
  app.use(express.urlencoded({ limit: '5mb', extended: true }));

  await app.listen(port);

  Logger.log(
    `Server connected to DB successfully and now running on port ${port}`,
  );
}
bootstrap();
