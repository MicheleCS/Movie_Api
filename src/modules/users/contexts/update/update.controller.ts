import { Body, Controller, HttpCode, Patch, UsePipes, ValidationPipe } from "@nestjs/common";
import { UpdateUserRequestDTO } from "shared/dto/user/updateUserRequest.dto";
import { UpdateUserService } from "./update.service";

@Controller('users')
export class UpdateUserController {
    constructor(private readonly updateUserService: UpdateUserService) {}

    @Patch()
    @HttpCode(201)
    @UsePipes(
      new ValidationPipe({
        transform: true,
      }),
    )
    async update(@Body () updateUserRequestDTO: UpdateUserRequestDTO ) {
        await this.updateUserService.update( updateUserRequestDTO);
    }
}