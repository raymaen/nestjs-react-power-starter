import { Module } from '@nestjs/common';
import { PugsModule } from './pugs/pug.module';
import { MongooseModule } from '@nestjs/mongoose';
import { APP_INTERCEPTOR, APP_FILTER } from '@nestjs/core';
import { EasyconfigModule as ConfigModule } from 'nestjs-easyconfig';
import { LoggingInterceptor } from './middleware/logging.interceptor.ts';
import { HttpErrorFilter } from './middleware/http-error.filter';

@Module({
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: HttpErrorFilter,
    },
  ],
  imports: [
    PugsModule,
    MongooseModule.forRoot('mongodb://localhost/pugdb'),
    ConfigModule.register({
      path: `./config/.env.${process.env.NODE_ENV || 'development'}`,
      safe: true,
    }),
  ],
})
export class AppModule {}
