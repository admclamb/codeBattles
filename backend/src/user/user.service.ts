import { knex } from '../db/connection';
import { User } from '../ts/interfaces/userInterface';

class UserService {
  userTable: string = 'users';

  read(username: string): User {
    return knex(this.userTable).select('*').where({ username });
  }
  readByEmail(email: string): User {
    return knex(this.userTable).select('*').where({ email });
  }
}

export const service = new UserService();
