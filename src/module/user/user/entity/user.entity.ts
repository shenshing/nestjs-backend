import { Role } from "src/module/role/role/entity/role.entity";
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('Users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({type: 'varchar'})
    username!: string;

    @Column({type: 'varchar', length: 1024})
    password!: string;

    @Column({type: 'varchar', nullable: true})
    email?: string;

    @Column({type: 'varchar'})
    phoneNumber!: string;   

    @CreateDateColumn()
    createdAt!: Date | string;

    @UpdateDateColumn()
    updatedAt!: Date | string;
}