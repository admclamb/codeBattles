import { IStorage } from '../../ts/interfaces/Storage';

export abstract class Storage<T extends string> {
  private storage: IStorage;
  public constructor(getStorage = () => window.localStorage) {
    this.storage = getStorage();
  }

  protected get(key: T): string | null {
    return this.storage.getItem(key);
  }

  protected set(key: T, value: string): void {
    this.storage.setItem(key, value);
  }

  protected delete(key: T): void {
    this.storage.removeItem(key);
  }
}
