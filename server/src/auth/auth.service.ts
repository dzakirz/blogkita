import { ConflictException, Injectable } from '@nestjs/common';
import { genSalt, hash } from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthRegisterDto } from './dto/auth-register.dto';

@Injectable()
export class AuthService {
  constructor(private readonly db: PrismaService) {}

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
}
