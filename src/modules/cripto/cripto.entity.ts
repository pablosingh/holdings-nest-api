import { IsNumber, IsOptional, IsString } from 'class-validator';
export class Cripto {
  @IsNumber()
  id!: number;

  @IsString()
  cripto!: string;

  @IsNumber()
  price!: number;

  @IsString()
  updated_price!: string; 
}

export class CriptoDto {
  @IsOptional()
  @IsString()
  cripto?: string;

  @IsOptional()
  @IsNumber()
  price?: number;

  @IsOptional()
  @IsString()
  updated_price?: string;
}
