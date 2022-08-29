import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'modules/auth/guards/jwt-auth.guards';
import { GetAllUserRoleService } from './getAll.service';

@ApiTags('user-roles')
@Controller('user-roles')
export class GetAllUserRoleController {
  constructor(private readonly getAllUserRoleService: GetAllUserRoleService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
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
