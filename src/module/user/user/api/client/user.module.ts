import { Module } from '@nestjs/common';
import { ClientUserService } from './user.service';
import { ClientUserController } from './user.controller';

@Module({
    imports: [],
    providers: [ClientUserService],
    controllers: [ClientUserController],
    exports: []
})
export class ClientUserModule {}
