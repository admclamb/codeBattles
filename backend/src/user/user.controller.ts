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
    const emailExist = await this.emailExist(email);
    const usernameExist = await this.usernameExist(username);
    if (emailExist || usernameExist) {
      return next({
        status: 400,
        message: 'User already exist.',
      });
    }
    const encryptedPassword: string = await this.encryptPassword(password);
    if (!encryptedPassword) {
      return next({
        status: 500,
        message: 'Error creating user.',
      });
    }
    const user = await service.create({
      username,
      password: encryptedPassword,
      email,
    });

    next();
  }

  public destroy() {}
}

export const controller = new UserController();
