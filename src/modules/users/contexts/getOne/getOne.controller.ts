import { Controller, Get, Param } from "@nestjs/common";
import { GetOneUserService } from "./getOne.service";

@Controller('users')
export class GetOneUserController {
    constructor(private readonly getOneUserService: GetOneUserService) {}

    @Get('id')
    async findOne(@Param('id') id:string) {
        return await this.getOneUserService.findOne(id);
    }
}