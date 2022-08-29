import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class GetAllMovieRequestDTO {
  @ApiProperty()
  @IsString()
  @IsOptional()
  movie?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  director?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  actor?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  gender?: string;
}
