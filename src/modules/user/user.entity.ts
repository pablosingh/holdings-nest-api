import { IsNumber, IsOptional, IsString } from "class-validator";

export class User {
  @IsNumber()
  id!: number;

  @IsString()
  full_name!: string;

  @IsString()
  email!: string;
  
}

export class UserDto {
  @IsNumber()
  @IsOptional()
  id?: number;

  @IsString()
  @IsOptional()
  full_name?: string;

  @IsString()
  @IsOptional()
  email?: string;
  
}