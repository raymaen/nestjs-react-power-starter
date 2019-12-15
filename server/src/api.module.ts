import { Module } from '@nestjs/common';
import { PugsModule } from './pugs/pug.module';
import { GamesModule } from './games/games.module';

@Module({
  imports: [PugsModule, GamesModule],
})
export class ApiModule {}
