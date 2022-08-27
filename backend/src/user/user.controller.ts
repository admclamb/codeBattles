import { asyncErrorBoundary } from '../errors/asyncErrorBoundary';
import { Request, Response, NextFunction } from 'express';
import { service } from './login/service';
import bcrypt from 'bcryptjs';
import { hasValidProperties } from '../utils/hasValidProperties';

class UserController {
  validProperties = ['username', 'email', 'password'];

  private async emailExist(email: string) {
    return (await service.readByEmail(email)) ? true : false;
  }

  private async usernameExist(username: string) {
    return (await service.read(username)) ? true : false;
  }

  public read() {}

  public login() {}

  public logout() {}

  public create(req: Request, res: Response, next: NextFunction) {}

  public destroy() {}
}

export const controller = new UserController();
