import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterUserDto } from './dto';

@Injectable()
export class AuthService {
  constructor(private readonly db: PrismaService) {}

  async registerUser(dto: RegisterUserDto) {
    const userExists = await this.db.user.count({
      where: {
        email: dto.email,
      },
    });

    if (userExists) {
      throw new ConflictException('User already exists');
    }

    await this.db.user.create({
      data: {
        email: dto.email,
        name: dto.name,
        password: dto.password,
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
