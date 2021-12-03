import { User } from "src/module/user/user/entity/user.entity";
import { Column, CreateDateColumn, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('Roles')
export class Role {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({type: 'varchar'})
    name!: string;

    @Column({type: 'varchar'})
    code!: string;

    @CreateDateColumn()
    createdAt!: Date | string;

    @UpdateDateColumn()
    updatedAt!: Date | string;
}