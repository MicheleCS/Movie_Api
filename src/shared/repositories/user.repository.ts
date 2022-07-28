import { User } from 'shared/database/entities/user.entity';
import { CreateUserDTO } from 'shared/dto/user/createUser.dto';
import { UpdateUserRequestDTO } from 'shared/dto/user/updateUserRequest.dto';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(dto: CreateUserDTO): Promise<User> {
    const user = this.create(dto);
    return this.save(user);
  }

  async findAllUser(): Promise<User[] | undefined> {
    return this.find();
  }

  async findOneUser(id: string): Promise<User | undefined> {
    return this.findOne({ id });
  }

  async updateUser(dto: UpdateUserRequestDTO): Promise<void> {
    await this.update(dto.id, dto);
  }

  async deleteUser(id: string): Promise<void> {
    await this.delete(id);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.findOne({ email });
  }
}
