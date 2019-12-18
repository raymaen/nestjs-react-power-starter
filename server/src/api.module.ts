import { Module } from '@nestjs/common';
import { GameModule } from './games/game.module';

@Module({
  imports: [GameModule],
})
export class ApiModule {}
