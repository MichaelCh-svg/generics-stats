import { AComparable } from "./AComparable";
import { Stats } from "./Stats";

export class Algorithms {
  static calcStats<T>(list: AComparable<T>[]): Stats<T> {
    let min: AComparable<T> = list.reduce((prev, curr) =>
      curr.lessThan(prev.localValue) ? curr : prev
    );
    let max: AComparable<T> = list.reduce((prev, curr) =>
      curr.lessThan(prev.localValue) ? prev : curr
    );
    return new Stats(min.localValue, max.localValue);
  }
}
