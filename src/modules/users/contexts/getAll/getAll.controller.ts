import { Controller, Get, HttpCode, UsePipes, ValidationPipe } from "@nestjs/common";
import { GetAllService } from "./getAll.service";

@Controller('users')
export class GetAllController {
    constructor(private readonly getAllService: GetAllService) {}

    @Get()
    @HttpCode(200)
    @UsePipes(
      new ValidationPipe({
        transform: true,
      }),
    )
    findAll(){
        return this.getAllService.findAll();
    }
}