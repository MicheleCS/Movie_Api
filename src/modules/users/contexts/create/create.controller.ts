import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserRequestDTO } from "shared/dto/user/createUserRequest.dto";
import { CreateUserService } from "./create.service";

@Controller('users')
export class CreateUserController {
    constructor(private readonly createUserService: CreateUserService) {}

    @Post()
    async create(@Body() dto: CreateUserRequestDTO) {
        const user = await this.createUserService.create(dto);
        return user;
    }
}