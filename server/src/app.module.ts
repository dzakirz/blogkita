import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
import { ArticlesModule } from './articles/articles.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ArticlesModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
