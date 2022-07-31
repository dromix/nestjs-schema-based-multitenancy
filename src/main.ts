import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { config } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log'],
  });

  const documentConfig = new DocumentBuilder()
    .setTitle('Multi tenancy with Prisma')
    .setDescription('Multi tenancy with Prisma')
    .setVersion('1.0')
    .addTag('MultiTenancy')
    .build();

  const document = SwaggerModule.createDocument(app, documentConfig);
  SwaggerModule.setup('api', app, document);

  await app.listen(config.server.port, () => {
    console.log(`Server is running on port ${config.server.port}`);
  });
}

bootstrap();
