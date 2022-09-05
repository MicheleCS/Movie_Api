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
import { UpdateUserRequestDTO } from 'shared/dto/user/updateUserRequest.dto';
import { UpdateUserService } from './update.service';

@Controller('users')
export class UpdateUserController {
  constructor(private readonly updateUserService: UpdateUserService) {}

  @ApiBearerAuth()
  @Patch()
  @Roles(roles.BASIC, roles.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  async update(@Body() updateUserRequestDTO: UpdateUserRequestDTO) {
    await this.updateUserService.update(updateUserRequestDTO);
  }
}
