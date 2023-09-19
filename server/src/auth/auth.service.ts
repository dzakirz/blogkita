import { ConflictException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare, genSalt, hash } from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthLoginDto } from './dto/auth-login.dto';
import { AuthRegisterDto } from './dto/auth-register.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly db: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async registerUser(dto: AuthRegisterDto) {
    const userExists = await this.db.user.count({
      where: {
        email: dto.email,
      },
    });

    if (userExists) {
      throw new ConflictException('User already exists');
    }

    const salt = await genSalt(10);
    const hashedPassword = await hash(dto.password, salt);

    await this.db.user.create({
      data: {
        email: dto.email,
        name: dto.name,
        password: hashedPassword,
      },
      select: {
        id: true,
        email: true,
        name: true,
      },
    });

    const result = {
      message: 'User created successfully',
    };

    return result;
  }

  async validateUser(dto: AuthLoginDto): Promise<any> {
    const user = await this.db.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (user && (await compare(dto.password, user.password))) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  async loginUser(user: any) {
    const payload = { email: user.email, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
