export class Stats<T> {
  min: T;
  max: T;

  constructor(min: T, max: T) {
    this.min = min;
    this.max = max;
  }
}
