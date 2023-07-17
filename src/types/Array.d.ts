declare global {
  export interface Array<T> {
    myMap: (fn: (args: T) => void) => Array<T>;
    myFlat: () => Array<T>;
    myFilter: (fn: (args: T) => boolean, thisArg?: any) => Array<T>;
    myGroup: (fn: (args: T) => void, thisArg?: any) => T;
  }
}

export {};
