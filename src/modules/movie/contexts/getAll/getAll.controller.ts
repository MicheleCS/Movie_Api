import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { instanceToInstance } from 'class-transformer';
import { JwtAuthGuard } from 'modules/auth/guards/jwt-auth.guards';
import { RolesGuard } from 'modules/auth/guards/role.guards';
import { Roles } from 'modules/auth/guards/roles.decorator';
import { roles } from 'shared/constants/roles';
import { GetAllMovieRequestDTO } from 'shared/dto/movie/getAllUserRequest.dto';
import { GettAllMovieService } from './getAll.service';

@Controller('movies')
export class GetAllMovieController {
  constructor(private readonly getAllMovieService: GettAllMovieService) {}

  @ApiBearerAuth()
  @Get()
  @Roles(roles.BASIC, roles.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  async findAll(@Query() dto: GetAllMovieRequestDTO) {
    const findedMovies = await this.getAllMovieService.findAll(dto);
    return instanceToInstance(findedMovies);
  }
}
