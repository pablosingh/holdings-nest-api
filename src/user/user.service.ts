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
    const result = await this.db.query('SELECT * FROM users WHERE id = $1', [id]);
    return result.rows[0];
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
