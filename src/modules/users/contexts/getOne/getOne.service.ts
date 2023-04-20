import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'shared/database/entities/user.entity';
import { UserRepository } from 'shared/repositories/user.repository';
import { EntityNotFoundError } from 'typeorm';

@Injectable()
export class GetOneUserService {
  constructor(
    @InjectRepository(UserRepository)
    private repository: UserRepository,
  ) {}

  async findOne(id: string) {
    const user = this.repository.findOneUser(id);
    if (!user) throw new EntityNotFoundError(User, id);
    return await this.repository.findOneUser(id);
  }
}
