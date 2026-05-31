import { Inject, Injectable } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class UserService {
  constructor(@Inject('PG') private readonly db: Pool) {}

  async getAllUsers() {
    const result = await this.db.query('SELECT * FROM users');
    return result.rows;
  }
  async findUserById(id: number) {
    // const result = await this.db.query('SELECT * FROM users WHERE id = $1', [id]);
    const result = await this.db.query('SELECT * FROM users WHERE id = $1', [id]);
    return result.rows[0];
  }
  async getUserWithInfo(id: number) {
    const userFound = await this.db.query('SELECT * FROM users WHERE id = $1', [id]);
    if (!userFound.rows[0]) {
      return 'Usuario no encontrado';
    }
    let userHoldings = await this.db.query(
        `SELECT * FROM holdings WHERE user_id = $1`,
        [id]
    );
    userHoldings.rows?.length == 0 ? userHoldings = [] : userHoldings = userHoldings.rows;
    // let userOperations = await this.db.query(
    //   `SELECT * FROM operations WHERE user_id = $1`,
    //   [id]
    // );
    // userOperations.rows?.length == 0 ? userOperations = [] : userOperations = userOperations.rows;



    const result = await this.db.query(
      `SELECT *
        FROM users u
        JOIN holdings h
          ON h.user_id = u.id
        JOIN operations o
          ON o.holding_id = h.id
        JOIN criptos c
          ON c.id = o.cripto_id
        WHERE u.id = $1;
      `,
      [id]
    );
    console.log(result.rows);
    return result.rows;
  }
  async createUser(full_name: string, email: string) {
    const result = await this.db.query(
      'INSERT INTO users (full_name, email) VALUES ($1, $2) RETURNING *',
      [full_name, email]
    );
    return result.rows[0];
  }
  async deleteUser(id: number) {
    const result = await this.db.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  }
  async updateUser(id: number, full_name: string, email: string) {
    const result = await this.db.query(
      'UPDATE users SET full_name = $1, email = $2 WHERE id = $3 RETURNING *',
      [full_name, email, id]
    );
    return result.rows[0];
  }
}
