import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserRequestDTO } from "shared/dto/user/createUserRequest.dto";
import { UserRepository } from "shared/repositories/user.repository";

@Injectable()
export class CreateUserService {
    constructor(
        @InjectRepository(UserRepository)
        private repository: UserRepository,
    ) {}

    async create(dto: CreateUserRequestDTO) {
        return await this.repository.createUser(dto)
    }
}