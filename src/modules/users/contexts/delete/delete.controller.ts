import { Controller, Delete, HttpCode, Param, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'modules/auth/guards/jwt-auth.guards';
import { DeleteUserService } from './delete.service';

@Controller('users')
export class DeleteUserController {
  constructor(private readonly deleteUserService: DeleteUserService) {}

  @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    @HttpCode(204)
    @UsePipes(
      new ValidationPipe({
        transform: true,
      }),
    )
  async remove(@Param('id') id: string) {
    return await this.deleteUserService.remove(id);
  }
}
