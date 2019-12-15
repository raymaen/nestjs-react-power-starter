import { Injectable } from '@nestjs/common';
import { config } from '../../config';
import { Configuration } from 'config/config.interface';

@Injectable()
export class ConfigurationService {
  get(): Configuration {
    return config;
  }
}
