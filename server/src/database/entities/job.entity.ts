import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import CompanyEntity from './company.entity';

@Entity({ name: 'job' })
class JobEntity {
  @PrimaryGeneratedColumn('increment')
  public id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @Column({ type: 'int', nullable: false })
  companyId: number;

  @Column({ type: 'tinyint', nullable: false, default: 0 })
  isActive: number;

  @JoinColumn({ name: 'employeeId' })
  @ManyToOne(() => CompanyEntity, (company: CompanyEntity) => company.jobs)
  company: CompanyEntity;
}

export default JobEntity;
