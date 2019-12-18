import { Module } from '@nestjs/common';
import { PugsModule } from './pugs/pug.module';
import { GameModule } from './games/game.module';

@Module({
  imports: [PugsModule, GameModule],
})
export class ApiModule {}
