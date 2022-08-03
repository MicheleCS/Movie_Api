import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRoleRequestDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;
}
