import { BadRequestException, Injectable } from "@nestjs/common";

import * as D from './auth.dto';
import { UserRepository } from '../user/user/repository/user.repository';
import { hash, compare } from 'bcryptjs';
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from '@nestjs/config';
import { UserRoleRepository } from '../user/role/repository/user-role.repository';
import { RoleRepository } from '../role/role/repository/role.repository';


@Injectable()
export class AuthService {
    private readonly defaultUserRole: string;
    constructor(
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService,

        private readonly roleRepository: RoleRepository,
        private readonly userRepository: UserRepository,
        private readonly userRoleRepository: UserRoleRepository,
    ) {
        this.defaultUserRole = this.configService.get<string>('DEFAULT_ROLE');
    }

    async register(body: D.RegisterBody): Promise<any> {
        body!.password = await hash(body.password, 5);
        
        const user = await this.userRepository.save({...body});

        const role = await this.roleRepository.findOne({where: {code: this.defaultUserRole}})
        
        await this.userRoleRepository.save({userId: user?.id, roleId: role?.id, isPrimary: true})
        
        return {
            message: 'ok'
        }
    }

    async login(body: D.LoginBody): Promise<any> {
        const user = await this.userRepository.findOne({
            where: [
                {email: body?.username},
                {phoneNumber: body?.username}
            ]
        });

        if(!user) throw new BadRequestException('Invalid User');

        if (!(await compare(body!.password, user.password)))
            throw new BadRequestException('Your email/phone number or password is incorrect');

        const userPrimaryRole = await this.userRoleRepository.findOne({where: {userId: user?.id, isPrimary: true}});

        const data = {
            id: user?.id,
            username: user?.username,
            phoneNumber: user?.phoneNumber,
            email: user?.email,
            primaryRoleId: userPrimaryRole?.roleId
        }

        console.log(this.configService.get<string>('JWT_EXPIRE_HOUR'));
        const accessToken = await this.jwtService.signAsync(data, { noTimestamp: true, expiresIn: this.configService.get<string>('JWT_EXPIRE_HOUR')});

        return {
            message: 'ok',
            accessToken
        }

    }

    //====================
    //    VALIDATION
    //====================

    // async validate
}