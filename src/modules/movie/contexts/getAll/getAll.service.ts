import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GetAllMovieRequestDTO } from 'shared/dto/movie/getAllUserRequest.dto';
import { MovieRepository } from 'shared/repositories/movie.repository';

@Injectable()
export class GettAllMovieService {
  constructor(
    @InjectRepository(MovieRepository)
    private repository: MovieRepository,
  ) {}

  async findAll(dto: GetAllMovieRequestDTO) {
    return this.repository.findAllMovie(dto);
  }
}
