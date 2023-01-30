import CompanyEntity from './company.entity';
declare class JobEntity {
    id: number;
    name: string;
    companyId: number;
    isActive: number;
    company: CompanyEntity;
}
export default JobEntity;
