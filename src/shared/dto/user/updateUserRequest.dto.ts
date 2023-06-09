import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateUserRequestDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  id?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  email?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  cpf?: string;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  acctive?: boolean;
}
