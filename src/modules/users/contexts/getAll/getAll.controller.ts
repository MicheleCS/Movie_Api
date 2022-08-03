import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { GetAllUserService } from './getAll.service';

@Controller('users')
export class GetAllUserController {
  constructor(private readonly getAllUserService: GetAllUserService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  findAll() {
    return this.getAllUserService.findAll();
  }
}
