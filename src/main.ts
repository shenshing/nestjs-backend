import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { AuthModule } from './module/auth/auth.module';
import { AuthGuard } from './module/auth/auth.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Custom Project')
    .setDescription('Custom Project Descriptions')
    .setVersion('1.0.0')
    .addTag('Custom Project API')
    .addBearerAuth()
    .build();

  
  const authGuard = app.select(AuthModule).get(AuthGuard)
  app.useGlobalGuards(authGuard);

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);
  await app.listen(3002);
}
bootstrap();
