import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { isEmpty } from 'lodash';
import { Repository } from 'typeorm';
import CompanyEntity from './database/entities/company.entity';
import JobEntity from './database/entities/job.entity';
import PopularCompany2023Entity from './database/entities/popularCompany2023.entity';
import UserEntity from './database/entities/user.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    @InjectRepository(CompanyEntity)
    private conpanyRepository: Repository<CompanyEntity>,
    @InjectRepository(JobEntity)
    private jobRepository: Repository<JobEntity>,
    @InjectRepository(PopularCompany2023Entity)
    private popularCompany2023Repository: Repository<PopularCompany2023Entity>,
  ) {}

  async getCompany(): Promise<Array<CompanyEntity>> {
    const companies = await this.conpanyRepository.find({
      select: ['id', 'name'],
    });
    return companies;
  }

  async getJobByCompanyId(companyId: number): Promise<Array<JobEntity>> {
    const jobs = await this.jobRepository.find({
      where: { companyId },
      select: ['id', 'name', 'companyId'],
    });
    return jobs;
  }

  async checkPopularCompanyById(companyId: number): Promise<boolean> {
    const isExist = await this.popularCompany2023Repository.findOne({
      where: { companyId },
      select: ['id', 'companyId'],
    });
    console.log('------------------------');
    console.log('isExist', companyId, !isEmpty(isExist));
    console.log('------------------------');
    return !isEmpty(isExist);
  }
}
