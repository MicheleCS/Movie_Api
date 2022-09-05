import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'modules/auth/guards/jwt-auth.guards';
import { RolesGuard } from 'modules/auth/guards/role.guards';
import { Roles } from 'modules/auth/guards/roles.decorator';
import { roles } from 'shared/constants/roles';
import { GetAssessmentService } from './getAssessment.service';

@Controller('movies')
export class GetAssessmentController {
  constructor(private readonly getAssessmentService: GetAssessmentService) {}

  @ApiBearerAuth()
  @Get('/assessments/:id')
  @Roles(roles.BASIC, roles.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  async findAssessment(@Param('id') id: string) {
    return this.getAssessmentService.evaluate(id);
  }
}
