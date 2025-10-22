import { Operators } from "../types/Operators";

const operations = {
  '+': (a: number, b: number) => a + b,
  '-': (a: number, b: number) => a - b,
  '*': (a: number, b: number) => a * b,
  '/': (a: number, b: number) => b === 0 ? NaN : a / b,
  '%': (a: number, b: number) => a % b
};

export const mathFromString = (
  prev: number,
  current: number,
  operator: Operators
) => {
    return operations[operator](prev, current)
};
