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
import { RolesGuard } from 'modules/auth/guards/role.guards';
import { Roles } from 'modules/auth/guards/roles.decorator';
import { roles } from 'shared/constants/roles';
import { CreateMovieRequestDTO } from 'shared/dto/movie/createMovieRequest.dto';
import { CreateMovieService } from './create.service';

@ApiTags('movies')
@Controller('movies')
export class CreateMovieController {
  constructor(private readonly createMovieService: CreateMovieService) {}

  @ApiBearerAuth()
  @Post()
  @Roles(roles.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  async create(@Body() dto: CreateMovieRequestDTO) {
    const movie = await this.createMovieService.create(dto);
    return instanceToInstance(movie);
  }
}
