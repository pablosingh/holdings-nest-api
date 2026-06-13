import { IsNumber, IsOptional, IsString } from 'class-validator';
export class Holding {
  @IsOptional()
  @IsNumber()
  id!: number;

  @IsString()
  cripto!: string;

  @IsNumber()
  user_id!: number;

  @IsString()
  date!: string;

  @IsNumber()
  amount!: number;

  @IsNumber()
  initial_price!: number;
  
  @IsNumber()
  initial_total!: number;
}


export class HoldingDto {
  @IsOptional()
  @IsString()
  cripto?: string;
  @IsOptional()
  @IsNumber()
  user_id?: number;
  @IsOptional()
  @IsString()
  date?: string;
  @IsOptional()
  @IsNumber()
  amount?: number;
  @IsOptional()
  @IsNumber()
  initial_price?: number;
  @IsOptional()
  @IsNumber()
  initial_total?: number;
}

