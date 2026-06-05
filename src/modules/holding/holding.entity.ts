export class Holding {
  id?: number;
  cripto: string;
  userId: number;
  date: string;
  amount: number;
  initialPrice: number;
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
