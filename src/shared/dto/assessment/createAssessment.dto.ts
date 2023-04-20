import { Assessment } from 'shared/database/entities/assessment.entity';
import { Movie } from 'shared/database/entities/movie.entity';
import { User } from 'shared/database/entities/user.entity';

export class CreateAssessmentDTO {
  assessment: number;
  user: User;
  movie: Movie;
}
