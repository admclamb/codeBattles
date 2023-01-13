export interface IStorage {
  getItem(key: string): string | null;
  setItem(key: string): void;
  removeItem(key: string): void;
}
