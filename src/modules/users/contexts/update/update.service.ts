import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "shared/database/entities/user.entity";
import { UpdateUserRequestDTO } from "shared/dto/user/updateUserRequest.dto";
import { UserRepository } from "shared/repositories/user.repository";
import { EntityNotFoundError } from "typeorm";

@Injectable()
export class UpdateUserService {
    constructor(
        @InjectRepository(UserRepository)
        private repository: UserRepository,
        
    ) {}

    async update( dto: UpdateUserRequestDTO) : Promise <void>{
        const findedUser = await this.repository.findOneUser(dto.id)
        if (!findedUser){
            throw new EntityNotFoundError(User, dto.id);
        }

        await this.repository.updateUser(dto);
    }
}