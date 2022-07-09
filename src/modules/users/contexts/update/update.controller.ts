import { Body, Controller, Patch } from "@nestjs/common";
import { UpdateUserRequestDTO } from "shared/dto/user/updateUserRequest.dto";
import { UpdateUserService } from "./update.service";

@Controller('users')
export class UpdateUserController {
    constructor(private readonly updateUserService: UpdateUserService) {}

    @Patch()
    async update(@Body () updateUserRequestDTO: UpdateUserRequestDTO ) {
        await this.updateUserService.update( updateUserRequestDTO);
    }
}