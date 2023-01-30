import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Post,
  Param,
} from '@nestjs/common';
import { AppService } from './app.service';
import CompanyEntity from './database/entities/company.entity';
import JobEntity from './database/entities/job.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('company')
  async getCompanies(): Promise<Array<CompanyEntity>> {
    console.log('------------------------');
    console.log('getCompanies123');
    console.log('------------------------');

    // throw new InternalServerErrorException();

    return await this.appService.getCompany();
  }

  @Get('popularCompany/:id')
  async checkPopularCompanyById(
    @Param('id') companyId: number,
  ): Promise<boolean> {
    // throw new InternalServerErrorException();
    console.log('------------------------');
    console.log('checkPopularCompanyById', companyId);
    console.log('------------------------');
    return await this.appService.checkPopularCompanyById(Number(companyId));
  }

  @Post('job')
  async getJobs(
    @Body('companyId') companyId: number,
  ): Promise<Array<JobEntity>> {
    // throw new InternalServerErrorException();
    console.log('------------------------');
    console.log('companyId', companyId);
    console.log('------------------------');
    return await this.appService.getJobByCompanyId(Number(companyId));
  }

  @Post('user-subcribe')
  async userSubcribe(
    @Body() body: { email: string; companyId: number; jobId: number },
  ): Promise<{ success: boolean; data: typeof body }> {
    console.log('------------------------');
    console.log('body', body);
    console.log('------------------------');
    // throw new InternalServerErrorException();
    return { success: true, data: body };
  }
}
