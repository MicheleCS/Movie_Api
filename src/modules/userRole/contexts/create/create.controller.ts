import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { instanceToInstance } from 'class-transformer';
import { JwtAuthGuard } from 'modules/auth/guards/jwt-auth.guards';
import { CreateUserRoleRequestDTO } from 'shared/dto/userRole/createUserRoleRequest.dto';
import { CreateUserRoleService } from './create.service';

@ApiTags('user-roles')
@Controller('user-roles')
export class CreateUserRoleController {
  constructor(private readonly createUserRoleService: CreateUserRoleService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  async create(@Body() dto: CreateUserRoleRequestDTO) {
    const userRole = await this.createUserRoleService.execute(dto);
    return instanceToInstance(userRole);
  }
}
