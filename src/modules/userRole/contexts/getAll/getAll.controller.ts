import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'modules/auth/guards/jwt-auth.guards';
import { RolesGuard } from 'modules/auth/guards/role.guards';
import { Roles } from 'modules/auth/guards/roles.decorator';
import { roles } from 'shared/constants/roles';
import { GetAllUserRoleService } from './getAll.service';

@ApiTags('user-roles')
@Controller('user-roles')
export class GetAllUserRoleController {
  constructor(private readonly getAllUserRoleService: GetAllUserRoleService) {}

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
    return this.getAllUserRoleService.findAll();
  }
}
