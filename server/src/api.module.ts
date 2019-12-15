import { Module } from '@nestjs/common';
import { PugsModule } from './pugs/pug.module';

@Module({
  imports: [PugsModule],
})
export class ApiModule {}
