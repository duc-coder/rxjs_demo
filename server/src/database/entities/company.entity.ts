import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import JobEntity from './job.entity';

@Entity({ name: 'company' })
class CompanyEntity {
  @PrimaryGeneratedColumn('increment')
  public id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @Column({ type: 'tinyint', nullable: false, default: 0 })
  isActive: number;

  @OneToMany(() => JobEntity, (job: JobEntity) => job.company, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  jobs: JobEntity[];
}

export default CompanyEntity;
