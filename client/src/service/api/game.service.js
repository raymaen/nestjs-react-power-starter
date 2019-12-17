import { ApiService } from './api.service';

class gameService extends ApiService {
  constructor() {
    super('/api/games');
  }

  async getGames() {
    const data = await this.fetch();
    return data;
  }
}

export const GameService = new gameService();
