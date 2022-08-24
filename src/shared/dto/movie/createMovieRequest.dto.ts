import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMovieRequestDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  movie: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  actor: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  director: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  gender: string;
}
