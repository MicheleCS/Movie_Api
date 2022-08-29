import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BcryptProvider } from 'shared/providers/encrypt/bcrypt.provider';
import { MovieRepository } from 'shared/repositories/movie.repository';
import { CreateMovieController } from './contexts/create/create.controller';
import { CreateMovieService } from './contexts/create/create.service';
import { DeleteMovieController } from './contexts/delete/delete.controller';
import { DeleteMovieService } from './contexts/delete/delete.service';
import { GetAllMovieController } from './contexts/getAll/getAll.controller';
import { GettAllMovieService } from './contexts/getAll/getAll.service';
import { GetOneMovieController } from './contexts/getOne/getOne.controller';
import { GetOneMovieService } from './contexts/getOne/getOne.service';
import { UpdateMovieController } from './contexts/update/update.controller';
import { UpdateMovieService } from './contexts/update/update.service';

@Module({
  imports: [TypeOrmModule.forFeature([MovieRepository])],
  controllers: [
    CreateMovieController,
    DeleteMovieController,
    GetAllMovieController,
    GetOneMovieController,
    UpdateMovieController,
  ],
  providers: [
    { provide: 'ENCRYPT_PROVIDER', useClass: BcryptProvider },
    CreateMovieService,
    DeleteMovieService,
    GettAllMovieService,
    GetOneMovieService,
    UpdateMovieService,
  ],
})
export class MovieModule {}
