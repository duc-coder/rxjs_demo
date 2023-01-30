import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { connectionConfig } from './typeorm.provider';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => connectionConfig,
    }),
  ],
})
export class DatabaseModule {}
