import { User } from "shared/database/entities/user.entity";
import { CreateUserDTO } from "shared/dto/user/createUser.dto";
import { UpdateUserRequestDTO } from "shared/dto/user/updateUserRequest.dto";
import { EntityRepository, getRepository, Repository } from "typeorm";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  private ormRepository: Repository<User>;

  constructor() {
    super();
      this.ormRepository = getRepository(User);
  }

  async createUser(dto: CreateUserDTO): Promise <User>{
    const user = this.create(dto);
    return await this.save(user) 
  }

  async findOneUser(id: string): Promise<User | undefined> {
    return await this.findOne(
      {id},
    );
  }

  async updateUser(dto: UpdateUserRequestDTO): Promise<void> {
    await this.update(dto.id, dto);
  }

  async deleteUser(id: string): Promise<void> {
    this.delete(id);
  }
}