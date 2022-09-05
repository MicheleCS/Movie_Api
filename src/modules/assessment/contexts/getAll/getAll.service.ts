import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AssessmentRepository } from 'shared/repositories/assessment.repository';

@Injectable()
export class GetAllAssessmentService {
  constructor(
    @InjectRepository(AssessmentRepository)
    private repository: AssessmentRepository,
  ) {}

  async findAll() {
    return this.repository.findAllAssessment();
  }
}
