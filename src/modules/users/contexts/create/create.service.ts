import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserRequestDTO } from 'shared/dto/user/createUserRequest.dto';
import { BcryptProvider } from 'shared/providers/encrypt/bcrypt.provider';
import { UserRepository } from 'shared/repositories/user.repository';

@Injectable()
export class CreateUserService {
  constructor(
    @InjectRepository(UserRepository)
    private repository: UserRepository,
    @Inject('ENCRYPT_PROVIDER')
    private encryption: BcryptProvider,
  ) {}

  async create(dto: CreateUserRequestDTO) {
    const hashed = this.encryption.createHash(dto.password);

    return await this.repository.createUser({
      ...dto, 
      password: hashed
    });
  }
}
