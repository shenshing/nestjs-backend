import { EntityRepository, Repository } from "typeorm";
import { UserRole } from '../entity/user-role.entity';

@EntityRepository(UserRole)
export class UserRoleRepository extends Repository<UserRole> {}