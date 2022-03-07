import { LinkedList } from "./LinkedList";

export class HashMap<T> {
  private _entries: LinkedList<[
    any,
    T
  ]>[];
  private _size: number;

  constructor(size: number = 256) {
    this._entries = new Array<LinkedList<[string, T]>>(size);
    this._size = size;
  }

  public add(key: any, value: T) {
    let index = this._createHash(key);

    if (!this._entries[index]) {
      this._entries[index] = new LinkedList<[string, T]>();
      this._entries[index].insert([key, value]);
      return this;
    }

    let current = this._entries[index].head!;
    for (let i = 0; i < this._entries[index].size; i++) {
      if (current.value[0] === key) {
        current.value[1] = value;
        return this;
      }
      current = current.next!;
    }

    this._entries[index].insert([key, value]);
    return this;
  }

  public get(key: any) {
    let index = this._createHash(key);

    if(!this._entries[index]) return undefined;

    let current = this._entries[index].head!;
    for (let i = 0; i < this._entries[index].size; i++) {
      if (current.value[0] === key) return current.value[1];
      current = current.next!;
    }
    return undefined;
  }

  public remove(key: any) {
    let index = this._createHash(key);
    
    if (!this._entries[index]) return this;

    let current = this._entries[index].head!;
    for (let i = 0; i < this._entries[index].size; i++) {
      if (current.value[0] === key) {
        this._entries[index].deleteAt(i);
        return this;
      }
      current = current.next!;
    }
    return this;
  }

  private _createHash(key: any) {
    let characters = (
      (typeof key === 'string') ? key : JSON.stringify(key)
    ).split("");

    let sum = 0;
    for (let i = 0; i < characters.length; i++) {
      sum += characters[i].charCodeAt(0);
    }

    return sum % this._size;
  }
}
