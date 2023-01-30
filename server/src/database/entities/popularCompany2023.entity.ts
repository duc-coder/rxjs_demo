import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'popularCompany2023' })
class PopularCompany2023Entity {
  @PrimaryGeneratedColumn('increment')
  public id: number;

  @Column({ type: 'int', nullable: false })
  companyId: number;

  @Column({ type: 'tinyint', nullable: false, default: 0 })
  isActive: number;
}

export default PopularCompany2023Entity;
