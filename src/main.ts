import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.useGlobalPipes(new ValidationPipe())

  const config = new DocumentBuilder().setTitle('Nest Api').setDescription('The Nest API description')
    .setVersion('1.0')
    .addTag('Nest')
    .build()
  
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/', app, document)
  
  await app.listen(3000)
}
bootstrap()
