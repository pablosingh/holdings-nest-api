export class Operation {
  id: number;
  cripto: string;
  holdingId: number;
  date: string;
  buy: boolean;
  number: number;
  price: number;
  total: number;
  comment: string;
  exchange: string;
  constructor(
    id: number,
    cripto: string,
    holdingId: number,
    date: string,
    buy: boolean,
    number: number,
    price: number,
    total: number,
    comment: string,
    exchange: string
  ) {
    this.id = id;
    this.cripto = cripto;
    this.holdingId = holdingId;
    this.date = date;
    this.buy = buy;
    this.number = number;
    this.price = price;
    this.total = total;
    this.comment = comment;
    this.exchange = exchange;
  }
}
