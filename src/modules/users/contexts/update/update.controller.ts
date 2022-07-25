import { Body, Controller, HttpCode, Patch, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'modules/auth/guards/jwt-auth.guards';
import { UpdateUserRequestDTO } from 'shared/dto/user/updateUserRequest.dto';
import { UpdateUserService } from './update.service';

@Controller('users')
export class UpdateUserController {
  constructor(private readonly updateUserService: UpdateUserService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch()
  @HttpCode(204)
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  async update(@Body() updateUserRequestDTO: UpdateUserRequestDTO) {
    await this.updateUserService.update(updateUserRequestDTO);
  }
}
