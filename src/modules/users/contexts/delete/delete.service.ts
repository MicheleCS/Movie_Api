import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserRepository } from "shared/repositories/user.repository";

@Injectable()
export class DeleteUserService {
    constructor(
        @InjectRepository(UserRepository)
        private repository: UserRepository,
    ) {}

    async remove(id: string) {
        await this.repository.deleteUser(id);
    }

}