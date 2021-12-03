import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('UserRoles')
export class UserRole {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({type: 'varchar'})
    userId!: string;

    @Column({type: 'varchar'})
    roleId!: string;

    @Column({type: 'tinyint', default: 0})
    isPrimary?: boolean;
}