import { AComparable } from "./AComparable";

export class Maximizer<T> {
  private maxValue: AComparable<T> | undefined;

  updateValue(t: AComparable<T>): void {
    if (this.maxValue == undefined || this.maxValue.lessThan(t.localValue)) {
      this.maxValue = t;
    }
  }

  getValue(): AComparable<T> {
    return this.maxValue!;
  }
}
