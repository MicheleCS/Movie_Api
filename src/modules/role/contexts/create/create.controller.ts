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
import { CreateRoleRequestDTO } from 'shared/dto/role/createRoleRequest.dto';
import { CreateRoleService } from './create.service';

@ApiTags('roles')
@Controller('roles')
export class CreateRoleController {
  constructor(private readonly createRoleService: CreateRoleService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  async create(@Body() dto: CreateRoleRequestDTO) {
    const role = await this.createRoleService.create(dto);
    return instanceToInstance(role);
  }
}
