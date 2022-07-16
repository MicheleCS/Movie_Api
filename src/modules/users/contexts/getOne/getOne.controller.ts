import { Controller, Get, HttpCode, Param, UsePipes, ValidationPipe } from "@nestjs/common";
import { GetOneUserService } from "./getOne.service";

@Controller('users')
export class GetOneUserController {
    constructor(private readonly getOneUserService: GetOneUserService) {}

    @Get(':id')
    @HttpCode(200)
    @UsePipes(
      new ValidationPipe({
        transform: true,
      }),
    )
    async findOne(@Param('id') id:string) {
        return await this.getOneUserService.findOne(id);
    }
}