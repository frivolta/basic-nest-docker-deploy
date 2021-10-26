import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres.ckztgkjihhx9.eu-west-2.rds.amazonaws.com',
      database: 'postgres',
      username: 'postgres',
      password: 'postgres',
      port: 5432,
      synchronize: false,
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
