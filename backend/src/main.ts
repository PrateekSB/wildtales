import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api/v1');
  app.useGlobalPipes(new ValidationPipe());

  // Init swagger
  const options = new DocumentBuilder()
    .setTitle('Minddoclytics REST API')
    .setDescription(
      'The API description of the minddoclytics backend endpoints',
    )
    .setVersion('1.0')
    .addTag('minddoclytics')
    .addBearerAuth('Authorization', 'header')
    .setBasePath('/api/v1')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api/v1', app, document);

  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
