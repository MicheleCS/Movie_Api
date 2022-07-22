import { Controller, Get } from '@nestjs/common';
import { GetAllUserService } from './getAll.service';

@Controller('users')
export class GetAllUserController {
  constructor(private readonly getAllUserService: GetAllUserService) {}

  @Get()
  findAll() {
    return this.getAllUserService.findAll();
  }
}
