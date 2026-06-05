export class Cripto {
  id: number;
  cripto: string;
  price: number;
  updatedPrice: string;
  constructor(id: number, cripto: string, price: number, updatedPrice: string) {
    this.id = id;
    this.cripto = cripto;
    this.price = price;
    this.updatedPrice = updatedPrice;
  }
}
