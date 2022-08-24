import {
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'modules/auth/guards/jwt-auth.guards';
import { Roles } from 'modules/auth/guards/roles.decorator';
import { DeleteMovieService } from './delete.service';

@Controller('movies')
export class DeleteMovieController {
  constructor(private readonly deleteMovieService: DeleteMovieService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  //@Roles('admin')
  @HttpCode(HttpStatus.NO_CONTENT)
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  async remove(@Param('id') id: string) {
    return this.deleteMovieService.remove(id);
  }
}
