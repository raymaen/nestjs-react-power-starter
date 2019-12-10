import { ServiceClass } from './ServiceClass';

class pugService extends ServiceClass {
  constructor() {
    super('/api/pugs');
  }

  async getPugs() {
    const data = await this.fetch();
    return data;
  }
}

export const PugService = new pugService();
