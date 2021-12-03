import { Module } from "@nestjs/common";
import { AdminRoleModule } from './api/admin/role.module';

@Module({
    imports: [AdminRoleModule],
    providers: [],
    controllers: [],
    exports: []
})

export class RoleApiModule {}