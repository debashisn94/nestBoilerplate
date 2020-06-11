import {Entity, BaseEntity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn} from 'typeorm';

@Entity()

export class UserEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar"})
    name: string;

    @Column({unique: true})
    email: string;

    @Column({unique: true})
    phone: string;

    @Column({ nullable: true, select: false})
    password: string;

    @Column({ nullable: true, select: false})
    salt: string;

    @Column({nullable: true, select: false})
    token: string;

    @UpdateDateColumn({select: false})
    updatedAt: string;

    @CreateDateColumn({select: false})
    createdAt: string;
}