import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { Auth } from "src/core/decorators/auth.decorator";

import * as D from './auth.dto';
import { AuthService } from './auth.service';

@ApiTags('Auth')
@ApiBearerAuth()
@Controller('v1/auth')
export class AuthController {

    constructor(private readonly service: AuthService) {}

    @Auth('Hello')
    @Get('protected')
    protected() {
        return 'you have access protected route'
    }

    @Post('register')
    register(@Body() body: D.RegisterBody): Promise<any> {
        return this.service.register(body);
    }

    @Post('login')
    login(@Body() body: D.LoginBody): Promise<any> {
        return this.service.login(body);
    }
}