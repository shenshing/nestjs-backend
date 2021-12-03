import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";

interface AuthRefactor {
    permissions: string[]
}

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private readonly reflector: Reflector,
        private readonly jwtService: JwtService
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const handler = context.getHandler();

        const auth = this.reflector.get<AuthRefactor>('auth', handler);
        if(auth === undefined) return true;

        const authToken = request.get('authorization') || '';
        const [scheme, token] = authToken.split(' ');
        console.log(scheme);
        console.log(token);

        let decoded: JWTPayload;
        decoded =  await this.jwtService.verifyAsync<JWTPayload>(token);
        console.log(decoded);
        

        // return validateRequest(request);
        return true;
    }
}

export interface JWTPayload {
    id: string;
    username: string;
    loginDate: string;
}