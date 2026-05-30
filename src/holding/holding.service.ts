import { Injectable, Inject } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class HoldingService {
  constructor(
      @Inject('PG')
      private readonly db: Pool
    ) {}
  async getAllHoldings() {
    const result = await this.db.query(
      `
        SELECT * FROM holdings;
      `
    );
    return result.rows;
  }
  async findHoldingById(id: number) {
    const result = await this.db.query(
      `
        SELECT * FROM holdings WHERE id = $1;
      `,
      [id]
    );
    return result.rows[0];
  }
  async findHoldingsByCripto(cripto: string) {
    const result = await this.db.query(
      `
        SELECT * FROM holdings WHERE cripto = $1;
      `,
      [cripto]
    );
    return result.rows;
  }
  async createHolding(cripto: string, userId: number, date: string, 
    amount: number, initialPrice: number, initialTotal: number) {
    const result = await this.db.query(
      `
        INSERT INTO holdings (cripto, userId, date, amount, initialPrice, initialTotal) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;
      `,
      [cripto, userId, date, amount, initialPrice, initialTotal]
    );
    return result.rows[0];
  }
  async deleteHolding(id: number) {
    const result = await this.db.query(
      `
        DELETE FROM holdings WHERE id = $1 RETURNING *;
      `,
      [id]
    );
    return result.rows[0];
  }
  async updateHolding(id: number, cripto: string, userId: number, date: string, 
    amount: number, initialPrice: number, initialTotal: number) {
    const result = await this.db.query(
      `
        UPDATE holdings SET cripto = $1, userId = $2, date = $3, amount = $4, initialPrice = $5, initialTotal = $6 WHERE id = $7 RETURNING *;
      `,
      [cripto, userId, date, amount, initialPrice, initialTotal, id]
    );
    return result.rows[0];
  }
}
