import { Injectable, Inject } from '@nestjs/common';
import { Pool } from 'pg';
@Injectable()
export class OperationService {
  constructor(
      @Inject('PG')
      private readonly db: Pool
    ) {}
  async getAllOperations() {
    const result = await this.db.query(
      `
        SELECT * FROM operations;
      `
    );
    return result.rows;
  }
  async findOperationById(id: number) {
    const result = await this.db.query(
      `
        SELECT * FROM operations WHERE id = $1;
      `,
      [id]
    );
    return result.rows[0];
  }
  async createOperation(cripto: string, holdingId: number, date: string,
    buy: boolean, number: number, price: number, total: number,
    comment: string, exchange: string) {
      const result = await this.db.query(
      `
        INSERT INTO operations (cripto, holdingId, date, buy, number, price, total, comment, exchange) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;
      `,
      [cripto, holdingId, date, buy, number, price, total, comment, exchange]
    );
    return result.rows[0];
  }
}
