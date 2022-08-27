import { asyncErrorBoundary } from '../errors/asyncErrorBoundary';
import { Request, Response, NextFunction } from 'express';
import { service } from './user.service';
import bcrypt from 'bcryptjs';
import { hasValidProperties } from '../utils/hasValidProperties';
import { User } from './User';
const { SALT = '5' } = process.env;
class UserController {
  validProperties = ['username', 'email', 'password'];

  private async emailExist(email: string) {
    return (await service.readByEmail(email)) ? true : false;
  }

  private async usernameExist(username: string) {
    return (await service.read(username)) ? true : false;
  }

  private async encryptPassword(password: string): Promise<string> {
    let saltError;
    const hashedPassword = await bcrypt
      .hash(password, parseInt(SALT))
      .catch(saltError);
    if (!saltError) {
      return hashedPassword;
    }
    return '';
  }

  public read() {}

  public login() {}

  public logout() {}

  public async create(req: Request, res: Response, next: NextFunction) {
    const { username, password, email } = req.body.data;
    const encryptedPassword = await this.encryptPassword(password);
    if (!encryptedPassword) {
      return next({
        status: 500,
        message: 'Error creating user. Please try again',
      });
    }
    const user = new User(username, encryptedPassword, email);
  }

  public destroy() {}
}

export const controller = new UserController();
