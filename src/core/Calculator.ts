import { Operators } from "../types/Operators";
import { mathFromString } from "../utils/mathFromString";

export class Calculator {
   current: string | null = null;
  private previous: string | null = null;
  private operator: Operators | null = null;

  addDigit(digit: string) {
    if (this.current === null) {
      this.current = digit;
    } else {
      this.current += digit;
    }
  }

  addOperator(operator: Operators) {
    this.previous = this.current;
    this.operator = operator;
  }

  getResult() {
    if (
      this.operator === null ||
      this.previous === null ||
      this.current === null
    ) {
      return this.current;
    }
    const result = mathFromString(Number(this.previous), Number(this.current), this.operator);
    this.current = String(result);
    this.previous = null;
    this.operator = null;
    return result;
  }

  clear() {
    this.current = null;
    this.previous = null;
    this.operator = null;
  }
}
