import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { instanceToInstance } from 'class-transformer';
import { CreateRoleRequestDTO } from 'shared/dto/role/createRoleRequest.dto';
import { CreateRoleService } from './create.service';

@ApiTags('roles')
@Controller('roles')
export class CreateRoleController {
  constructor(private readonly createRoleService: CreateRoleService) {}

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
