import { ApiService } from './api.service';

class pugService extends ApiService {
  constructor() {
    super('/api/pugs');
  }

  async getPugs() {
    const data = await this.fetch();
    return data;
  }
}

export const PugService = new pugService();
