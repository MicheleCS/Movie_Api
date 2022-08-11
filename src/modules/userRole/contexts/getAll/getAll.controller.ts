import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GetAllUserRoleService } from './getAll.service';

@ApiTags('user-roles')
@Controller('user-roles')
export class GetAllUserRoleController {
  constructor(private readonly getAllUserRoleService: GetAllUserRoleService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  async findAll() {
    return this.getAllUserRoleService.findAll();
  }
}
