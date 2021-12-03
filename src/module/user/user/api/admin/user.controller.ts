import { Controller, Get } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('User')
// @ApiBearerAuth()
@Controller('v1/admin/users')
export class AdminUserController {

    constructor(private readonly configService: ConfigService) {}

    @Get()
    get() {
        // const env = dotenv.config.
        const env = process.env.DATABASE_NAME;
        // const env = this.configService.get<string>('DATABASE_NAME');
        console.log(env);
        return 'admin user';
    }
}