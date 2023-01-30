import { Repository } from 'typeorm';
import CompanyEntity from './database/entities/company.entity';
import JobEntity from './database/entities/job.entity';
import PopularCompany2023Entity from './database/entities/popularCompany2023.entity';
import UserEntity from './database/entities/user.entity';
export declare class AppService {
    private userRepository;
    private conpanyRepository;
    private jobRepository;
    private popularCompany2023Repository;
    constructor(userRepository: Repository<UserEntity>, conpanyRepository: Repository<CompanyEntity>, jobRepository: Repository<JobEntity>, popularCompany2023Repository: Repository<PopularCompany2023Entity>);
    getCompany(): Promise<Array<CompanyEntity>>;
    getJobByCompanyId(companyId: number): Promise<Array<JobEntity>>;
    checkPopularCompanyById(companyId: number): Promise<boolean>;
}
