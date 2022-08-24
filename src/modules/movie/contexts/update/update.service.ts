import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from 'shared/database/entities/movie.entity';
import { UpdateMovieRequestDTO } from 'shared/dto/movie/updateMovieRequest.dto';
import { MovieRepository } from 'shared/repositories/movie.repository';
import { EntityNotFoundError } from 'typeorm';

@Injectable()
export class UpdateMovieService {
  constructor(
    @InjectRepository(MovieRepository)
    private repository: MovieRepository,
  ) {}

  async update(dto: UpdateMovieRequestDTO): Promise<void> {
    const findedMovie = await this.repository.findOneMovie(dto.id);
    if (!findedMovie) {
      throw new EntityNotFoundError(Movie, dto.id);
    }

    await this.repository.updateMovie(dto);
  }
}
