import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private AppService: AppService) {}

  @Get()
  getHello() {
    return this.AppService.getHello()
  }
}
