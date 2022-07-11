import { ApiProperty } from "@nestjs/swagger";

export class CreateUserRequestDTO {
    
    @ApiProperty()
    name: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;

    @ApiProperty()
    cpf: string;

    @ApiProperty()
    acctive: string;
}