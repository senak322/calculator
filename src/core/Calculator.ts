import { Operators } from "../types/Operators";
import { mathFromString } from "../utils/mathFromString";

export class Calculator {
  private current: number = 0;
  private previous: number | null = null;
  private operator: Operators | null = null;

  addDigit(digit: number) {
    this.current += digit;
  }

  addOperator(operator: Operators) {
    this.operator = operator;
  }

  getResult() {
    if (this.operator === null || this.previous === null) {
      return this.current;
    }
    const result = mathFromString(this.previous, this.current, this.operator);
    this.current = result
    this.previous = null
    this.operator = null
    return result
  }

  clear() {
    this.current = 0;
    this.previous = null;
    this.operator = null;
  }
}
