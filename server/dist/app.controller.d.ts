import { AppService } from './app.service';
import CompanyEntity from './database/entities/company.entity';
import JobEntity from './database/entities/job.entity';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getCompanies(): Promise<Array<CompanyEntity>>;
    checkPopularCompanyById(companyId: number): Promise<boolean>;
    getJobs(companyId: number): Promise<Array<JobEntity>>;
    userSubcribe(body: {
        email: string;
        companyId: number;
        jobId: number;
    }): Promise<{
        success: boolean;
        data: typeof body;
    }>;
}
