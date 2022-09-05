import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { instanceToInstance } from 'class-transformer';
import { JwtAuthGuard } from 'modules/auth/guards/jwt-auth.guards';
import { CreateAssessmentRequestDTO } from 'shared/dto/assessment/createAssessmentRequest.dto';
import { CreateAssessmentService } from './create.service';

@ApiTags('assessments')
@Controller('assessments')
export class CreateAssessmentController {
  constructor(
    private readonly createAssessmentService: CreateAssessmentService,
  ) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  async create(@Body() dto: CreateAssessmentRequestDTO) {
    const assessment = await this.createAssessmentService.execute(dto);
    return instanceToInstance(assessment);
  }
}
