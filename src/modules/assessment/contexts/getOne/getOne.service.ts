import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Assessment } from 'shared/database/entities/assessment.entity';
import { AssessmentRepository } from 'shared/repositories/assessment.repository';
import { EntityNotFoundError } from 'typeorm';

@Injectable()
export class GetOneAssessmentService {
  constructor(
    @InjectRepository(AssessmentRepository)
    private repository: AssessmentRepository,
  ) {}

  async findOne(id: string) {
    const assessment = this.repository.findOneAssessment(id);
    if (!assessment) throw new EntityNotFoundError(Assessment, id);
    return this.repository.findOneAssessment(id);
  }
}
