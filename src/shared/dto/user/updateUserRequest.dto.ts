import { ApiProperty } from "@nestjs/swagger";

export class UpdateUserRequestDTO {

    @ApiProperty()
    id?: string;

    @ApiProperty()
    name?: string;

    @ApiProperty()
    email?: string;

    @ApiProperty()
    password?: string;

    @ApiProperty()
    cpf?: string;
}