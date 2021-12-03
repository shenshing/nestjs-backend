import { Module } from "@nestjs/common";
import { RoleApiModule } from './role/main.module';

@Module({
    imports: [RoleApiModule]
})

export class RoleModule {}