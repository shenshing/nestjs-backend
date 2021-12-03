import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import * as path from 'path';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
    constructor(private readonly configService: ConfigService) {}

    createTypeOrmOptions(): TypeOrmModuleOptions {

        console.log(__dirname);
        return {
            host: this.configService.get<string>('HOST'),
            port: parseInt(this.configService.get<string>('PORT')),
            username: this.configService.get<string>('DATABASE_USERNAME'),
            password: this.configService.get<string>('PASSWORD'),
            database: this.configService.get<string>('DATABASE'),
            entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
            type: this.configService.get<string>('TYPE') as any,
            bigNumberStrings: false,
            logging: this.configService.get<boolean>('LOGGING'),
            synchronize: this.configService.get<boolean>('SYNCHRONIZE'),
            autoLoadEntities: true,
            keepConnectionAlive: true
        }
    }
}