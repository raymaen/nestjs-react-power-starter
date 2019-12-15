import { Module } from '@nestjs/common';
import { PugsController } from './pug.controller';
import { PugService } from './pug.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PugSchema } from './schemas/pug.shcema';
import { ConfigurationService } from 'src/shared/configuration.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Pug', schema: PugSchema }])],
  controllers: [PugsController],
  providers: [PugService, ConfigurationService],
})
export class PugsModule {}
