import { Controller, Get } from "@nestjs/common";
import { GetAllService } from "./getAll.service";

@Controller()
export class GetAllController {
    constructor(private readonly getAllService: GetAllService) {}

    @Get()
    findAll(){
        return this.getAllService.findAll();
    }
}