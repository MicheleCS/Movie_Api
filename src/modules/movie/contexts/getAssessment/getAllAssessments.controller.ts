import { Controller, Get, Param } from '@nestjs/common';
import { GetAssessmentService } from './getAssessment.service';

@Controller('movies')
export class GetAssessmentController {
  constructor(private readonly getAssessmentService: GetAssessmentService) {}

  @Get('/assessments/:id')
  async findAssessment(@Param('id') id: string) {
    return this.getAssessmentService.evaluate(id);
  }
}
