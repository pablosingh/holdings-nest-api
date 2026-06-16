import { Inject, Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import { UserDto } from './user.entity';

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
  async getUserWithInfo(id: number) {
    let userFound = await this.db.query('SELECT * FROM users WHERE id = $1', [id]);
    if (!userFound.rows[0]) {
      return 'Usuario no encontrado';
    }
    userFound = userFound.rows[0];

    let userHoldings = await this.db.query(
        `SELECT * FROM holdings WHERE user_id = $1`,
        [id]
    );
    userHoldings.rows?.length == 0 ? userHoldings = [] : userHoldings = userHoldings.rows;

    const holdingsWithOperations = await Promise.all(
      userHoldings.map(async (holding) => {
        const operations = await this.db.query(
          `SELECT * FROM operations WHERE holding_id = $1`,
          [holding.id]
        );
        return { ...holding, operations: operations.rows };
    }));
    
    console.log("Holdings con operaciones:");
    console.log(holdingsWithOperations);

    return { ...userFound, holdings: holdingsWithOperations };
  }
  async createUser(toCreate: UserDto) {
    const { full_name, email } = toCreate;
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
  async updateUser(id: number, toUpdate: UserDto) {
    const currentUser = await this.findUserById(id);
    if (!currentUser) return null;

    const cleanUpdate = Object.fromEntries(Object.entries(toUpdate)
      .filter(([_, value]) => value !== undefined)
    );
    const updatedUser = { ...currentUser, ...cleanUpdate };
    const { full_name, email } = updatedUser;
    const result = await this.db.query(
      'UPDATE users SET full_name = $1, email = $2 WHERE id = $3 RETURNING *',
      [full_name, email, id]
    );
    return result.rows[0];
  }
}