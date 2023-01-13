import { Storage } from './storage/Storage';

enum Local {
  REFRESH_TOKEN = 'refresh_token',
}

export default class Token extends Storage<Local> {
  private static instance?: Token;

  constructor() {
    super();
  }

  public static getInstance() {
    if (!this.instance) {
      this.instance = new Token();
    }
    return this.instance;
  }

  public getRefreshToken() {
    return this.get(Local.REFRESH_TOKEN);
  }

  public setRefreshToken(refreshToken: string) {
    this.set(Local.REFRESH_TOKEN, refreshToken);
  }

  public deleteRefreshToken() {
    this.delete(Local.REFRESH_TOKEN);
  }
}
