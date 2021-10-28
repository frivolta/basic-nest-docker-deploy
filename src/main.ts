import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';

async function bootstrap() {
  console.log('certificate: ',fs.readFileSync('./src/cert.crt').toString() )
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
