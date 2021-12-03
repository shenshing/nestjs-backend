import { IsNotEmptyString, IsOptionalString } from "src/core/decorators/dto.decorator";


export class RegisterBody {
    @IsNotEmptyString()
    username!: string;

    @IsNotEmptyString()
    password!: string;

    @IsOptionalString()
    email?: string;

    @IsNotEmptyString()
    phoneNumber!: string;
}

export class LoginBody {
    @IsNotEmptyString()
    username!: string;

    @IsNotEmptyString()
    password!: string;
}