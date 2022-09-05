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
import { UpdateAssessmentDTO } from 'shared/dto/assessment/updateAssessment.dto';
import { UpdateAssessmentService } from './update.service';

@Controller('assessments')
export class UpdateAssessmentController {
  constructor(
    private readonly updateAssessmentService: UpdateAssessmentService,
  ) {}

  @ApiBearerAuth()
  @Patch()
  @Roles(roles.BASIC, roles.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  async update(@Body() updateAssessmentDTO: UpdateAssessmentDTO) {
    await this.updateAssessmentService.update(updateAssessmentDTO);
  }
}
