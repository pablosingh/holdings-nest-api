import { Injectable, Inject } from '@nestjs/common';
import { Pool } from 'pg';
import { OperationDto } from './operation.entity';
import { HoldingService } from '../holding/holding.service';
@Injectable()
export class OperationService {
  constructor(
      @Inject('PG')
      private readonly db: Pool,
      private readonly holdingService: HoldingService,
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
  async findOperationsByCripto(cripto: string) {
    const result = await this.db.query(
      `
        SELECT * FROM operations WHERE cripto = $1;
      `,
      [cripto]
    );
    return result.rows;
  }
  async createOperation(createOperationDto: OperationDto) {
    const { cripto, date, buy, number, price, total, comment, exchange, cripto_id, holding_id } = createOperationDto;
      const result = await this.db.query(
      `
        INSERT INTO operations (cripto, date, buy, number, price, total, comment, exchange, cripto_id, holding_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *;
      `,
      [ cripto, date, buy, number, price, total, comment, exchange, cripto_id, holding_id]
    );
    return result.rows[0];
  }
  async deleteOperation(id: number) {
    const result = await this.db.query(
      `
        DELETE FROM operations WHERE id = $1 RETURNING *;
      `,
      [id]
    );
    return result.rows[0];
  }

  async updateOperation(id: number, toUpdate: OperationDto) {
    const currentOperation = await this.findOperationById(id);
    if (!currentOperation) return null;

    const cleanUpdate = Object.fromEntries(Object.entries(toUpdate)
      .filter(([_, value]) => value !== undefined)
    );
    const updatedOperation = { ...currentOperation, ...cleanUpdate };
    const { cripto, holding_id, cripto_id, date, buy, number, price, total, comment, exchange } = updatedOperation;
    const result = await this.db.query(
      `
        UPDATE operations SET cripto = $2, holding_id = $3, cripto_id = $4, date = $5, buy = $6, number = $7, price = $8, total = $9, comment = $10, exchange = $11 WHERE id = $1 RETURNING *;
      `,
      [id, cripto, holding_id, cripto_id, date, buy, number, price, total, comment, exchange]
    );
    return result.rows[0];
  }
}
