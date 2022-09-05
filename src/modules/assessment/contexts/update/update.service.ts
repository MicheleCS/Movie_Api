import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Assessment } from 'shared/database/entities/assessment.entity';
import { UpdateAssessmentRequestDTO } from 'shared/dto/assessment/updateAssessmentRequest.dto';
import { AssessmentRepository } from 'shared/repositories/assessment.repository';
import { EntityNotFoundError } from 'typeorm';

@Injectable()
export class UpdateAssessmentService {
  constructor(
    @InjectRepository(AssessmentRepository)
    private repository: AssessmentRepository,
  ) {}

  async update(dto: UpdateAssessmentRequestDTO): Promise<void> {
    const findedAssessment = this.repository.findOneAssessment(dto.id);
    if (!findedAssessment) {
      throw new EntityNotFoundError(Assessment, dto.id);
    }

    await this.repository.updateAssessment(dto);
  }
}
