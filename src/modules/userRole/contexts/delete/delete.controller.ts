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
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'modules/auth/guards/jwt-auth.guards';
import { DeleteUserRoleService } from './delete.service';

@ApiTags('user-roles')
@Controller('user-roles')
export class DeleteUserRoleController {
  constructor(private readonly deleteUserRoleService: DeleteUserRoleService) {}

  @ApiBearerAuth()
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  async remove(@Param('id') id: string) {
    return this.deleteUserRoleService.remove(id);
  }
}
