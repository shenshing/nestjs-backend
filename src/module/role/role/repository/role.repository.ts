import { EntityRepository, Repository, SelectQueryBuilder } from "typeorm";
import { Role } from '../entity/role.entity';

@EntityRepository(Role)
export class RoleRepository extends Repository<Role> {

    async $findAndCountAll(opts: FindAllOption) {
        const queryBuilder = this.$queryBuilder();
        const filter = this.$filter(queryBuilder, opts);

        const [data, total] = await Promise.all([filter.getRawMany(), filter.getCount()]);

        return {
            data,
            total
        }

    }

    private $queryBuilder() {
        const q = this.createQueryBuilder('r');

        return q;
    }

    private $filter<T>(q: SelectQueryBuilder<T>, opts?: FindAllOption): SelectQueryBuilder<T> {
        if(opts?.limit)                 q.take(opts?.limit);
        if(opts?.offset)                q.skip(opts?.offset);

        return q;
    }
}

interface FindAllOption {
    limit?: number;
    offset?: number;
}