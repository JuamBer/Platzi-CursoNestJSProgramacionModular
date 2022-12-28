import { Inject, Injectable } from '@nestjs/common';
import { ConfigService, ConfigType } from '@nestjs/config';
import config from '../environments/config';
@Injectable()
export class AppService {
  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}

  getHello(): string {
    return `Hello World!  \nAPI_KEY:${this.configService.apiKey}\nDB:${this.configService.database.name}`;
  }
}
