import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const p = process.env.PORT;
    return `Hello World! 4{port}`;
  }
}
