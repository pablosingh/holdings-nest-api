import { IsNumber, IsOptional, IsString } from 'class-validator';
export class Holding {
  @IsOptional()
  @IsNumber()
  id: number;
  @IsString()
  cripto: string;
  @IsNumber()
  userId: number;
  @IsString()
  date: string;
  @IsNumber()
  amount: number;
  @IsNumber()
  initialPrice: number;
  @IsNumber()
  initialTotal: number;
  constructor(
    id: number,
    cripto: string,
    userId: number,
    date: string,
    amount: number,
    initialPrice: number,
    initialTotal: number
  ) {
    this.id = id;
    this.cripto = cripto;
    this.userId = userId;
    this.date = date;
    this.amount = amount;
    this.initialPrice = initialPrice;
    this.initialTotal = initialTotal;
  }
}

export class CreateHoldingDto {
  @IsString()
  cripto: string;
  @IsNumber()
  userId: number;
  @IsString()
  date: string;
  @IsNumber()
  amount: number;
  @IsNumber()
  initialPrice: number;
  @IsNumber()
  initialTotal: number;
  constructor(
    cripto: string,
    userId: number,
    date: string,
    amount: number,
    initialPrice: number,
    initialTotal: number) {
    this.cripto = cripto;
    this.userId = userId;
    this.date = date;
    this.amount = amount;
    this.initialPrice = initialPrice;
    this.initialTotal = initialTotal;
  }
}

export class UpdateHoldingDto {
  @IsOptional()
  @IsString()
  cripto?: string;
  @IsOptional()
  @IsNumber()
  userId?: number;
  @IsOptional()
  @IsString()
  date?: string;
  @IsOptional()
  @IsNumber()
  amount?: number;
  @IsOptional()
  @IsNumber()
  initialPrice?: number;
  @IsOptional()
  @IsNumber()
  initialTotal?: number;
  constructor(
    cripto?: string,
    userId?: number,
    date?: string,
    amount?: number,
    initialPrice?: number,
    initialTotal?: number) {
    this.cripto = cripto;
    this.userId = userId;
    this.date = date;
    this.amount = amount;
    this.initialPrice = initialPrice;
    this.initialTotal = initialTotal;
  }
}

