import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMovieRequestDTO } from 'shared/dto/movie/createMovieRequest.dto';
import { MovieRepository } from 'shared/repositories/movie.repository';

@Injectable()
export class CreateMovieService {
  constructor(
    @InjectRepository(MovieRepository)
    private repository: MovieRepository,
  ) {}

  async create(dto: CreateMovieRequestDTO) {
    return this.repository.createMovie(dto);
  }
}
