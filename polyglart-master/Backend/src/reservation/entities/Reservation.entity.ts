import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../../user/User.entity';
import { Site } from '../../sites/Site.entity';
@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: Date.now() })
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  total: number;

  @Column()
  @ManyToOne(() => User, (user) => user.reservations)
  user: User;

  @Column()
  @ManyToOne(() => Site, (site) => site.reservations)
  site: Site;
}
