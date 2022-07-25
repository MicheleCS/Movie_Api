import { Controller, Get, HttpCode, UsePipes, ValidationPipe } from "@nestjs/common";
import { GetAllUserService } from "./getAll.service";

@Controller('users')
export class GetAllController {
    constructor(private readonly getAllService: GetAllUserService) {}

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
