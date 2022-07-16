import { Body, Controller, HttpCode, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { instanceToInstance } from "class-transformer";
import { CreateUserRequestDTO } from "shared/dto/user/createUserRequest.dto";
import { CreateUserService } from "./create.service";

@ApiTags('users')
@Controller('users')
export class CreateUserController {
    constructor(private readonly createUserService: CreateUserService) {}

    @Post()
    @HttpCode(201)
    @UsePipes(
      new ValidationPipe({
        transform: true,
      }),
    )
    async create(@Body() dto: CreateUserRequestDTO) {
        const user = await this.createUserService.create(dto);
        return instanceToInstance(user);
    }
}