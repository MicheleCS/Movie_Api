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
import { UpdateMovieRequestDTO } from 'shared/dto/movie/updateMovieRequest.dto';
import { UpdateMovieService } from './update.service';

@Controller('movies')
export class UpdateMovieController {
  constructor(private readonly updateMovieService: UpdateMovieService) {}

  @ApiBearerAuth()
  @Patch()
  @Roles(roles.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  async update(@Body() updateMovieRequestDTO: UpdateMovieRequestDTO) {
    await this.updateMovieService.update(updateMovieRequestDTO);
  }
}
