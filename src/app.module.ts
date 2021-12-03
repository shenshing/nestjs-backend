import { Module } from '@nestjs/common';
import { UserModule } from './module/user/main.module';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from './lib/typeorm';
import { AuthModule } from './module/auth/auth.module';
import { RoleModule } from './module/role/main.module';
require('dotenv').config()

// import * as d


@Module({
  imports: [
    TypeOrmModule,
    UserModule,
    AuthModule,
    RoleModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
