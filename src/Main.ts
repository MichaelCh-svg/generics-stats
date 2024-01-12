import { Algorithms } from "./stats/Algorithms";
import { AComparable } from "./stats/AComparable";
import { Maximizer } from "./stats/Maximizer";
import { Stats } from "./stats/Stats";

export class StrComparable extends AComparable<String> {
  constructor(value: string) {
    super(value);
  }

  lessThan<String>(t: String): boolean {
    return this.localValue < t;
  }
}

class NumComparable extends AComparable<Number> {
  constructor(value: Number) {
    super(value);
  }

  lessThan<Number>(t: Number): boolean {
    return this.localValue < t;
  }
}

let strMaximizer = new Maximizer<String>();
strMaximizer.updateValue(new StrComparable("a"));
strMaximizer.updateValue(new StrComparable("z"));
strMaximizer.updateValue(new StrComparable("m"));
let maxStr: AComparable<String> = strMaximizer.getValue();
console.log(maxStr.localValue);

let intMaximizer = new Maximizer<Number>();
intMaximizer.updateValue(new NumComparable(-22));
intMaximizer.updateValue(new NumComparable(10000));
intMaximizer.updateValue(new NumComparable(33));
let maxInt: NumComparable = intMaximizer.getValue();
console.log(maxInt.localValue);

console.log();

let strArr: StrComparable[] = [
  new StrComparable("z"),
  new StrComparable("a"),
  new StrComparable("m"),
];
let strStats: Stats<String> = Algorithms.calcStats<String>(strArr);
console.log("min: %s, max: %s", strStats.min, strStats.max);

let intArr: NumComparable[] = [
  new NumComparable(10000),
  new NumComparable(33),
  new NumComparable(-22),
];
let intStats: Stats<Number> = Algorithms.calcStats<Number>(intArr);
console.log("min: %d, max: %d", intStats.min, intStats.max);
