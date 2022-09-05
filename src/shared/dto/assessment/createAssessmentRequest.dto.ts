import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateAssessmentRequestDTO {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  assessment: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  user_id: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  movie_id: string;
}
