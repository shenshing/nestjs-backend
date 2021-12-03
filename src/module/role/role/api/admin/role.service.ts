import { Injectable } from "@nestjs/common";

import * as D from './role.dto';
import { RoleRepository } from '../../repository/role.repository';

@Injectable()
export class AdminRoleService {

    constructor(private readonly repository: RoleRepository) {}


    async list(query: D.ListQuery): Promise<any> {
        const { limit, offset } = query;

        const {data, total} = await this.repository.$findAndCountAll(query);

        return {
            data,
            metadata: {
                total,
                limit,
                offset
            }
        }
    }

    async create(body: D.RoleBody): Promise<any> {
        const role = await this.repository.save(body);

        return {
            message: 'ok',
            id: role?.id
        }
    }
}