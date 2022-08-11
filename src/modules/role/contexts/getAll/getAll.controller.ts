import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { GetAllRoleService } from './getAll.service';

@Controller('roles')
export class GetAllRoleController {
  constructor(private readonly getAllRoleService: GetAllRoleService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  async findAll() {
    return this.getAllRoleService.findAll();
  }
}
