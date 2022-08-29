import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from 'shared/database/entities/movie.entity';
import { MovieRepository } from 'shared/repositories/movie.repository';
import { EntityNotFoundError } from 'typeorm';

@Injectable()
export class DeleteMovieService {
  constructor(
    @InjectRepository(MovieRepository)
    private repository: MovieRepository,
  ) {}
  async remove(id: string) {
    const movie = this.repository.findOneMovie(id);
    if (!movie) throw new EntityNotFoundError(Movie, id);
    await this.repository.deleteMovie(id);
  }
}
