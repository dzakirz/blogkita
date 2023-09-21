import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateArticleDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(10)
  @MaxLength(50)
  title: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(100)
  @MaxLength(2000)
  content: string;
}
