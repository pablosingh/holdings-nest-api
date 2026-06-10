import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';
export class Operation {
  @IsNumber()
  @IsOptional()
  id!: number;
  @IsString()
  cripto!: string;
  @IsString()
  date!: string;
  @IsBoolean()
  buy!: boolean;
  @IsNumber()
  number!: number;
  @IsNumber()
  price!: number;
  @IsNumber()
  total!: number;

  @IsString()
  comment!: string;
  @IsString()
  exchange!: string;

  @IsNumber()
  @IsOptional()
  cripto_id!: number;
  
  @IsNumber()
  @IsOptional()
  holding_id!: number;
  
}

export class OperationDto {
  @IsString()
  @IsOptional()
  cripto?: string;

  @IsString()
  @IsOptional()
  date?: string;

  @IsBoolean()
  @IsOptional()
  buy?: boolean;

  @IsNumber()
  @IsOptional()
  number?: number;

  @IsNumber()
  @IsOptional()
  price?: number;

  @IsNumber()
  @IsOptional()
  total?: number;

  @IsString()
  @IsOptional()
  comment?: string;

  @IsString()
  @IsOptional()
  exchange?: string;

  @IsNumber()
  @IsOptional()
  cripto_id?: number;
  
  @IsNumber()
  @IsOptional()
  holding_id?: number;
}