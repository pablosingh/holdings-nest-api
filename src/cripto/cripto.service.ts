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
      SELECT * FROM criptos;
    `
    );
    return result.rows;
  }
  async findCryptoById(id: number) {
    const result = await this.db.query(
      `
        SELECT * FROM criptos WHERE id = $1;
      `,
      [id]
    );
    return result.rows[0];
  }
  
  async createCrypto(cripto: string, price: number, updated_price: string) {
    const result = await this.db.query(
      `
        INSERT INTO criptos (cripto, price, updated_price) VALUES ($1, $2, $3) RETURNING *;
      `,
      [cripto, price, updated_price]
    );
    return result.rows[0];
  }
  async deleteCrypto(id: number) {
    const result = await this.db.query(
      `
        DELETE FROM criptos WHERE id = $1 RETURNING *;
      `,
      [id]
    );
    return result.rows[0];
  }
  async updateCrypto(id: number, cripto: string, price: number, updatePrice: string) {
    const result = await this.db.query(
      `
        UPDATE criptos SET cripto = $1, price = $2, updated_price = $3 WHERE id = $4 RETURNING *;
      `,
      [cripto, price, updatePrice, id]
    );
    return result.rows[0];
  }
}
