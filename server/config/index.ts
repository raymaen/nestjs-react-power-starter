import { configProd } from './config.production';
import { configDev } from './config.development';

export const config =
  process.env.NODE_ENV === 'production' ? configProd : configDev;
