import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Assessment } from 'shared/database/entities/assessment.entity';
import { AssessmentRepository } from 'shared/repositories/assessment.repository';
import { MovieRepository } from 'shared/repositories/movie.repository';
import { EntityNotFoundError } from 'typeorm';

@Injectable()
export class GetAssessmentService {
  constructor(
    @InjectRepository(AssessmentRepository)
    private assessmentRepository: AssessmentRepository,
    @InjectRepository(MovieRepository)
    private repository: MovieRepository,
  ) {}

  async evaluate(id: string) {
    const movie = this.repository.findOneMovie(id);
    if (!movie) throw new EntityNotFoundError(Assessment, id);

    const assessmentsList =
      await this.assessmentRepository.findAllAssessmentsByMovie(id);

    const assessmentSum = assessmentsList.reduce((total, assessments) => {
      return total + Number(assessments.assessment);
    }, 0);

    const averageCalculated = assessmentSum / assessmentsList.length;
    const response = {
      assessments: assessmentsList,
      average: averageCalculated,
    };
    return response;
  }
}
