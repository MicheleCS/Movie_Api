import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'modules/auth/guards/jwt-auth.guards';
import { RolesGuard } from 'modules/auth/guards/role.guards';
import { Roles } from 'modules/auth/guards/roles.decorator';
import { roles } from 'shared/constants/roles';
import { GetAllRoleService } from './getAll.service';

@Controller('roles')
export class GetAllRoleController {
  constructor(private readonly getAllRoleService: GetAllRoleService) {}

  @ApiBearerAuth()
  @Get()
  @Roles(roles.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
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
