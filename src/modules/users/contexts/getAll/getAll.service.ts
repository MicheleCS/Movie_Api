import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from 'shared/repositories/user.repository';

@Injectable()
export class GetAllUserService {
  constructor(
    @InjectRepository(UserRepository)
    private repository: UserRepository,
  ) {}

  async findAll() {
    return await this.repository.findAllUser();
  }
}
