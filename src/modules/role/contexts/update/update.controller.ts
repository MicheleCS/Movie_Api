import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Patch,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'modules/auth/guards/jwt-auth.guards';
import { RolesGuard } from 'modules/auth/guards/role.guards';
import { Roles } from 'modules/auth/guards/roles.decorator';
import { roles } from 'shared/constants/roles';
import { UpdateRoleRequestDTO } from 'shared/dto/role/updateRoleRequest.dto';
import { UpdateRoleService } from './update.service';

@Controller('roles')
export class UpdateRoleController {
  constructor(private readonly updateRoleService: UpdateRoleService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch()
  @Roles(roles.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  async update(@Body() updateRoleRequestDTO: UpdateRoleRequestDTO) {
    await this.updateRoleService.update(updateRoleRequestDTO);
  }
}
