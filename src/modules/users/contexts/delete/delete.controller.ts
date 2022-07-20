import { Controller, Delete, HttpCode, Param, UsePipes, ValidationPipe } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { DeleteUserService } from "./delete.service";

@ApiTags('users')
@Controller('users')
export class DeleteUserController {
    constructor(private readonly deleteUserService: DeleteUserService) {}
    
    @Delete(':id')
    @HttpCode(204)
    @UsePipes(
      new ValidationPipe({
        transform: true,
      }),
    )
    async remove(@Param('id')id: string){
        return await this.deleteUserService.remove(id);
    }
}