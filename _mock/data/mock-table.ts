export class MockTable<T> {
  private data: Array<T>;

  public get Data(): Array<T> {
    return this.data || this._init();
  }

  private init: () => Array<T>;

  constructor(init: () => Array<T>) {
    this.init = init;
  }

  private _init() {
    this.data = this.init();
    return this.data;
  }
}

