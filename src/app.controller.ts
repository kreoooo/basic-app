import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/bye')
  getBye(): string {
    return this.appService.getBye();
  }

  @Post()
  addNumbers(@Body() payload: { a: number; b: number }): number {
    return this.appService.addNumbers(payload.a, payload.b);
  }
}
