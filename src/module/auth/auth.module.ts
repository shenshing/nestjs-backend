import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserRepository } from '../user/user/repository/user.repository';
import { JwtModule, JwtService } from "@nestjs/jwt";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { AuthGuard } from './auth.guard';
import { UserRoleRepository } from '../user/role/repository/user-role.repository';
import { RoleRepository } from '../role/role/repository/role.repository';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            RoleRepository,
            UserRepository,
            UserRoleRepository,
        ]),
        JwtModule.registerAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
                secret: configService.get<string>('JWT_SECRET')
            }),
            inject: [ConfigService]
        })
    ],
    controllers: [AuthController],
    providers: [AuthService, AuthGuard],
    exports: [AuthService]
})

export class AuthModule {}