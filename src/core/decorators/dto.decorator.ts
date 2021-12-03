import { applyDecorators } from "@nestjs/common";
import { ApiProperty, ApiPropertyOptions } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";


// ============================
// IS OPTIONAL
// ============================
export const IsOptionalString = (options?: ApiPropertyOptions) => applyDecorators(IsOptional(), ApiProperty(options), IsString());



// ============================
// NOT EMPTY
// ============================

export const IsNotEmptyString = (options?: ApiPropertyOptions) => applyDecorators(IsNotEmpty(), ApiProperty(options), IsString());