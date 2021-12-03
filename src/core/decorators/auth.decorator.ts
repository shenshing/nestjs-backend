import { SetMetadata } from '@nestjs/common';
export const Auth = (...permissions: string[]) => SetMetadata('auth', { permissions });
