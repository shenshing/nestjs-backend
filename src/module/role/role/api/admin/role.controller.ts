import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

import * as D from './role.dto';
import { AdminRoleService } from './role.service';

@ApiTags('Role')
@ApiBearerAuth()
@Controller('v1/admin/roles')
export class AdminRoleController {

    constructor(private readonly service: AdminRoleService) {}

    @Get()
    list(@Query() query: D.ListQuery): Promise<any> {
        return this.service.list(query);
    }

    @Post()
    create(@Body() body: D.RoleBody): Promise<any> {
        return this.service.create(body);
    }
}