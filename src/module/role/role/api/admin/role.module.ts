import { Module } from "@nestjs/common";
import { AdminRoleService } from './role.service';
import { AdminRoleController } from './role.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { RoleRepository } from '../../repository/role.repository';

@Module({
    imports: [TypeOrmModule.forFeature([
        RoleRepository
    ])],
    providers: [AdminRoleService],
    controllers: [AdminRoleController],
    exports: []
})

export class AdminRoleModule {}