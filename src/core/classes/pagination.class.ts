import { ApiPropertyOptional } from "@nestjs/swagger";
import { Max, Min } from "class-validator";
import { Transform } from "class-transformer";
import { TransformToNumber } from '../decorators/transform.decorator';

export class PaginationDto {
    @ApiPropertyOptional({default: 10, description: 'Limit query data'})
    @Min(0)
    @Max(1000)
    @Transform(x => x || 1)
    @TransformToNumber()
    readonly limit: number = 10;

    @ApiPropertyOptional({default: 0, description: 'Offset query data'})
    @Min(0)
    @TransformToNumber()
    readonly offset: number = 0;
}