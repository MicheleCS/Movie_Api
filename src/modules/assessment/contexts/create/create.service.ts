import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from 'shared/database/entities/movie.entity';
import { User } from 'shared/database/entities/user.entity';
import { CreateAssessmentRequestDTO } from 'shared/dto/assessment/createAssessmentRequest.dto';
import { AssessmentRepository } from 'shared/repositories/assessment.repository';
import { MovieRepository } from 'shared/repositories/movie.repository';
import { UserRepository } from 'shared/repositories/user.repository';
import { EntityNotFoundError } from 'typeorm';

@Injectable()
export class CreateAssessmentService {
  constructor(
    @InjectRepository(AssessmentRepository)
    private repository: AssessmentRepository,
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    @InjectRepository(MovieRepository)
    private movieRepository: MovieRepository,
  ) {}

  async execute(dto: CreateAssessmentRequestDTO) {
    const user = await this.userRepository.findOneUser(dto.user_id);
    if (!user) throw new EntityNotFoundError(User, dto.user_id);

    const movie = await this.movieRepository.findOneMovie(dto.movie_id);
    if (!movie) throw new EntityNotFoundError(Movie, dto.movie_id);

    const data = {
      assessment: dto.assessment,
      user: user,
      movie: movie,
    };

    return this.repository.createAssessment(data);
  }
}
