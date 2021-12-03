import { PaginationDto } from "src/core/classes/pagination.class";
import { IsNotEmptyString } from "src/core/decorators/dto.decorator";

export class ListQuery extends PaginationDto {}

export class RoleBody {
    @IsNotEmptyString()
    name!: string;

    @IsNotEmptyString()
    code!: string; 
}