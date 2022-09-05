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
import { RolesGuard } from 'modules/auth/guards/role.guards';
import { Roles } from 'modules/auth/guards/roles.decorator';
import { roles } from 'shared/constants/roles';
import { DeleteAssessmentService } from './delete.service';

@ApiTags('assessments')
@Controller('assessments')
export class DeleteAssessmentController {
  constructor(
    private readonly deleteAssessmentService: DeleteAssessmentService,
  ) {}

  @ApiBearerAuth()
  @Delete(':id')
  @Roles(roles.BASIC, roles.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  async remove(@Param('id') id: string) {
    return this.deleteAssessmentService.remove(id);
  }
}
