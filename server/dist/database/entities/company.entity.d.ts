import JobEntity from './job.entity';
declare class CompanyEntity {
    id: number;
    name: string;
    isActive: number;
    jobs: JobEntity[];
}
export default CompanyEntity;
