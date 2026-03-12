import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('user')
  createUser(@Body() body: { name: string; email: string }) {
    return this.appService.createUser(body.name, body.email);
  }
}
