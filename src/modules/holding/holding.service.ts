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
    const { cripto, user_id, date, amount, initial_price, initial_total } = toCreate;
    const result = await this.db.query(
      `
        INSERT INTO holdings (cripto, user_id, date, amount, initial_price, initial_total) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;
      `,
      [cripto, user_id, date, amount, initial_price, initial_total]
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
    const currentHolding = await this.findHoldingById(id);
    if (!currentHolding) {
      return null;
    }
    const cleanUpdate = Object.fromEntries(Object.entries(toUpdate)
      .filter(([_, value]) => value !== undefined)
    );
    const updatedHolding = { ...currentHolding, ...cleanUpdate };
    const { cripto, user_id, date, amount, initial_price, initial_total } = updatedHolding;
    const result = await this.db.query(
      `
        UPDATE holdings SET cripto = $1, user_id = $2, date = $3, amount = $4, initial_price = $5, initial_total = $6 WHERE id = $7 RETURNING *;
      `,
      [cripto, user_id, date, amount, initial_price, initial_total, id]
    );
    return result.rows[0];
  }
}
