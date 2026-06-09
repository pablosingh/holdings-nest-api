import { IsNumber, IsOptional, IsString } from 'class-validator';
export class Holding {
  @IsOptional()
  @IsNumber()
  id: number;
  @IsString()
  cripto: string;
  @IsNumber()
  user_id: number;
  @IsString()
  date: string;
  @IsNumber()
  amount: number;
  @IsNumber()
  initial_price: number;
  @IsNumber()
  initial_total: number;
  constructor(
    id: number,
    cripto: string,
    user_id: number,
    date: string,
    amount: number,
    initial_price: number,
    initial_total: number
  ) {
    this.id = id;
    this.cripto = cripto;
    this.user_id = user_id;
    this.date = date;
    this.amount = amount;
    this.initial_price = initial_price;
    this.initial_total = initial_total;
  }
}

export class CreateHoldingDto {
  @IsString()
  cripto: string;
  @IsNumber()
  user_id: number;
  @IsString()
  date: string;
  @IsNumber()
  amount: number;
  @IsNumber()
  initial_price: number;
  @IsNumber()
  initial_total: number;
  constructor(
    cripto: string,
    user_id: number,
    date: string,
    amount: number,
    initial_price: number,
    initial_total: number) {
    this.cripto = cripto;
    this.user_id = user_id;
    this.date = date;
    this.amount = amount;
    this.initial_price = initial_price;
    this.initial_total = initial_total;
  }
}

export class UpdateHoldingDto {
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
  constructor(
    cripto?: string,
    user_id?: number,
    date?: string,
    amount?: number,
    initial_price?: number,
    initial_total?: number) {
    this.cripto = cripto;
    this.user_id = user_id;
    this.date = date;
    this.amount = amount;
    this.initial_price = initial_price;
    this.initial_total = initial_total;
  }
}

