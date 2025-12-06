import {NestFactory, Reflector} from "@nestjs/core";
import { ValidationPipe, ClassSerializerInterceptor } from "@nestjs/common";
import { AppModule } from "@/app.module";
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    const reflector = app.get(Reflector)

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
            transformOptions: {
                enableImplicitConversion: true
            },
        }),
    );

    app.useGlobalInterceptors(new ClassSerializerInterceptor(reflector));

    app.enableCors();
    const port = process.env.PORT || 3000;
    await app.listen(port);
    console.log(`Server running on port ${port}`);
}
bootstrap();