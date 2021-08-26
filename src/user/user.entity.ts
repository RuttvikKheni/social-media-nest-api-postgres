import { PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, BaseEntity, Entity } from 'typeorm';
import { Gender } from './user.types';

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    profile_name: string;

    @Column()
    username: string;

    @Column()
    mobile_number: number;

    @Column({ type: 'enum', enum: Gender })
    gender: Gender;

    @Column()
    usermail: string;

    @Column()
    password: string;

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    updateAt: Date;

}