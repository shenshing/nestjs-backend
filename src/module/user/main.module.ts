import { Module } from "@nestjs/common";
import { ClientUserModule } from './user/api/client/user.module';
import { AdminUserModule } from './user/api/admin/user.module';

const UserModuleImport = [AdminUserModule, ClientUserModule]

@Module({
    imports: UserModuleImport,
})

export class UserModule {}