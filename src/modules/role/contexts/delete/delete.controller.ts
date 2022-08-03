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
import { DeleteRoleService } from './delete.service';

@ApiTags('roles')
@Controller('roles')
export class DeleteRoleController {
  constructor(private readonly deleteRoleService: DeleteRoleService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  async remove(@Param('id') id: string) {
    return this.deleteRoleService.remove(id);
  }
}
