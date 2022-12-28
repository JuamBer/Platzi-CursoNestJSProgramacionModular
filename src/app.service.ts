import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    @Inject('API_KEY') private apiKey: string,
    @Inject('TASKS') private tasks: any[],
  ) {}

  getHello(): string {
    return `Hello World!  \nAPI_KEY:${this.apiKey}\nTASKS:${JSON.stringify(
      this.tasks,
    )}`;
  }
}
