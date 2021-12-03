import { Controller, Get } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@ApiTags('Client User')
@ApiBearerAuth()
@Controller('v1/users')
export class ClientUserController {
    @Get()
    user() {
        return 'client user'
    }
}