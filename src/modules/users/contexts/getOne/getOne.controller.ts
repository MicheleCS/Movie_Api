import { Controller, Get, HttpCode, Param, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'modules/auth/guards/jwt-auth.guards';
import { GetOneUserService } from './getOne.service';

@Controller('users')
export class GetOneUserController {
  constructor(private readonly getOneUserService: GetOneUserService) {}

  @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    @HttpCode(200)
    @UsePipes(
      new ValidationPipe({
        transform: true,
      }),
    )
  async findOne(@Param('id') id: string) {
    return await this.getOneUserService.findOne(id);
  }
}
