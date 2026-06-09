import { Injectable, Inject } from '@nestjs/common';
import { Pool } from 'pg';
import { CreateHoldingDto, UpdateHoldingDto } from './holding.entity';

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
    let operations = await this.db.query(
      `
        SELECT * FROM operations WHERE cripto = $1;
      `,
      [cripto]
    );
    operations.length == 0 ? operations = [] : operations = operations.rows;
    let holding = await this.db.query(
      `
        SELECT * FROM holdings WHERE cripto = $1;
      `,
      [cripto]
    );
    holding.rows?.length > 0 ? holding = holding.rows[0] : holding = null;
    return {...holding, operations};
  }


  async createHolding(toCreate: CreateHoldingDto) {
    const { cripto, userId, date, amount, initialPrice, initialTotal } = toCreate;
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

  async updateHolding(id: number, toUpdate: UpdateHoldingDto) {
    const { cripto, userId, date, amount, initialPrice, initialTotal } = toUpdate;
    const result = await this.db.query(
      `
        UPDATE holdings SET cripto = $1, userId = $2, date = $3, amount = $4, initialPrice = $5, initialTotal = $6 WHERE id = $7 RETURNING *;
      `,
      [cripto, userId, date, amount, initialPrice, initialTotal, id]
    );
    return result.rows[0];
  }
}
