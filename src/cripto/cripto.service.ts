import { Injectable, Inject } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class CriptoService {
  constructor(
    @Inject('PG')
    private readonly db: Pool
  ) {}

  async getAllCryptos() {
    const result = await this.db.query(
    `
      SELECT * FROM cryptos;
    `
    );
    return result.rows;
  }
  async findCryptoById(id: number) {
    const result = await this.db.query(
      `
        SELECT * FROM cryptos WHERE id = $1;
      `,
      [id]
    );
    return result.rows[0];
  }
  async createCrypto(cripto: string, price: number, updatePrice: string) {
    const result = await this.db.query(
      `
        INSERT INTO cryptos (cripto, price, updatePrice) VALUES ($1, $2, $3) RETURNING *;
      `,
      [cripto, price, updatePrice]
    );
    return result.rows[0];
  }
  async deleteCrypto(id: number) {
    const result = await this.db.query(
      `
        DELETE FROM cryptos WHERE id = $1 RETURNING *;
      `,
      [id]
    );
    return result.rows[0];
  }
  async updateCrypto(id: number, cripto: string, price: number, updatePrice: string) {
    const result = await this.db.query(
      `
        UPDATE cryptos SET cripto = $1, price = $2, updatePrice = $3 WHERE id = $4 RETURNING *;
      `,
      [cripto, price, updatePrice, id]
    );
    return result.rows[0];
  }
}
