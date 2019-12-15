import { Module } from '@nestjs/common';
import { ApiModule } from './api.module';
import { MongoModule } from './mongo/mongo.module';
import { UtilModule } from './util.module';

@Module({
  imports: [ApiModule, UtilModule, MongoModule],
})
export class AppModule {}
