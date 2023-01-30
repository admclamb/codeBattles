import express, { Application } from 'express';
import { Error } from './errors/Error';
import { userRouter } from './user/user.router';
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

export const app = express();

export class App {
  instance: Application;

  constructor() {
    this.instance = express();
  }

  private setRoutes(): void {
    app.use('/users', userRouter);
  }

  public config(): void {
    this.instance.use(cors());
    this.instance.use(express.json());
    this.instance.use(cookieParser());
    this.setRoutes();
    this.instance.use(Error.notFound);
    this.instance.use(Error.handler);
  }

  public listen(PORT: string, listener: () => void): void {
    this.instance.listen(PORT, listener);
  }
}
