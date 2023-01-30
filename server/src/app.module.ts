import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import CompanyEntity from './database/entities/company.entity';
import JobEntity from './database/entities/job.entity';
import PopularCompany2023Entity from './database/entities/popularCompany2023.entity';
import UserEntity from './database/entities/user.entity';
import { DatabaseModule } from './database/typeorm.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      CompanyEntity,
      JobEntity,
      PopularCompany2023Entity,
    ]),
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
