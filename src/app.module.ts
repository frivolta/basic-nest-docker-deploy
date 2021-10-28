import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as fs from 'fs';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'app-e7721d42-0fda-45ea-bd42-1d30d397cc2f-do-user-9829637-0.b.db.ondigitalocean.com',
      database: 'db',
      username: 'db',
      password: 'ZN3taaqHdqD54qoq',
      port: 25060,
      synchronize: false,
      ssl: {
         ca: fs.readFileSync('./src/cert.crt').toString(),
      },
      entities: ['dist/src/**/*.entity.js'],
      migrations: ['dist/src/migrations/**/*.js'],
      subscribers: ['dist/src/subscriber/**/*.js'],
      cli: {
        migrationsDir: 'src/migrations',
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
