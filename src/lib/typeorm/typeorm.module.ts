import { Module } from "@nestjs/common";
import { TypeOrmModule as TypeORMModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './typeorm.service';

@Module({
    imports: [TypeORMModule.forRootAsync({useClass: TypeOrmConfigService})],
    exports: [TypeORMModule]
})

export class TypeOrmModule {}