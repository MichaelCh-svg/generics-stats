export abstract class AComparable<T> {
  localValue: T;

  constructor(value: T) {
    this.localValue = value;
  }
  abstract lessThan<T>(t: T): boolean;
}
interface comp<T> {
  lessThan(t1: T, t2: T): boolean;
}
class c1 implements comp<string> {
  lessThan(t1: string, t2: string): boolean {
    throw new Error("Method not implemented.");
  }
}

function calcStats<T>(cl: comp<T>): void {}
