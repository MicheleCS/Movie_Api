import { Movie } from 'shared/database/entities/movie.entity';
import { CreateMovieDTO } from 'shared/dto/movie/createMovie.dto';
import { GetAllMovieRequestDTO } from 'shared/dto/movie/getAllUserRequest.dto';
import { UpdateMovieRequestDTO } from 'shared/dto/movie/updateMovieRequest.dto';
import { EntityRepository, getRepository, Repository } from 'typeorm';

@EntityRepository(Movie)
export class MovieRepository extends Repository<Movie> {
  private ormRepository: Repository<Movie>;

  constructor() {
    super();
    this.ormRepository = getRepository(Movie);
  }
  private buildFilter(params: GetAllMovieRequestDTO) {
    const movie = params.movie;
    const actor = params.actor;
    const director = params.director;
    const gender = params.gender;
    const query = this.ormRepository.createQueryBuilder('movies');
    if (movie) {
      query.andWhere('movies.movie = :movie', { movie });
    }
    if (actor) {
      query.andWhere('movies.actor = :actor', { actor });
    }
    if (director) {
      query.andWhere('movies.director = :director', { director });
    }
    if (gender) {
      query.andWhere('movies.gender = :gender', { gender });
    }
    return query;
  }

  async createMovie(dto: CreateMovieDTO): Promise<Movie> {
    const movie = this.create(dto);
    return await this.save(movie);
  }

  async findAllMovie(dto: GetAllMovieRequestDTO): Promise<Movie[]> {
    const query = this.buildFilter(dto);
    const [data] = await query.getManyAndCount();
    return data;
  }

  async findOneMovie(id: string): Promise<Movie | undefined> {
    return this.findOne({ id });
  }

  async updateMovie(dto: UpdateMovieRequestDTO): Promise<void> {
    await this.update(dto.id, dto);
  }

  async deleteMovie(id: string): Promise<void> {
    await this.delete(id);
  }
}
