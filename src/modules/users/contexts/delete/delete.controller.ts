import { Controller, Delete, Param } from "@nestjs/common";
import { DeleteUserService } from "./delete.service";

@Controller('users')
export class DeleteUserController {
    constructor(private readonly deleteUserService: DeleteUserService) {}
    
    @Delete(':id')
    async remove(@Param('id')id: string){
        return await this.deleteUserService.remove(id);
    }
}