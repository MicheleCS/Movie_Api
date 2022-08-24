import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from '../constants';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from 'shared/repositories/user.repository';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req: Request) => {
          const headers = req.headers?.authorization
            ? req?.headers?.authorization
            : undefined;
          const authorization = headers?.header?.Authorization
            ? headers?.Authorization
            : undefined;
        },
      ]),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any) {
    const user = this.userRepository.findOne({
      where: { id: payload.sub },
      relations: ['userRoles', 'userRoles.role'],
    });
    return user;
  }
}
