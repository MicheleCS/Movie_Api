import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from 'shared/repositories/user.repository';

@Injectable()
export class GetOneUserService {
  constructor(
    @InjectRepository(UserRepository)
    private repository: UserRepository,
  ) {}

  async findOne(id: string) {
    return await this.repository.findOneUser(id);
  }
}
