import { Calculator } from "../core/Calculator";
import type { Operators } from "../types/Operators";

export function initCalculatorUI() {
  const calc = new Calculator();
  const display = document.getElementById("display") as HTMLElement;
  const operatorView = document.querySelector("#operator");

  document.querySelectorAll("#calculator button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const btnValue = btn.textContent;

      if (isNaN(Number(btnValue))) {
        calc.addDigit(btnValue);
        display.textContent = calc.current;
      } else if (["+", "*", "/", "%"].some((el) => el === btnValue)) {
        calc.addOperator(btnValue as Operators);
        operatorView!.className = "active";
      } else if (btnValue === "C") {
        display.textContent = "0";
        operatorView!.className = "hidden";
        calc.clear();
      } else if (btnValue === "=") {
        const result = calc.getResult();
        if (Number.isNaN(result) || result === null) {
          display.textContent = "Ошибка при вычислении";
          calc.clear();
          return;
        }
        display.textContent = String(result);
      }
    });
  });
}
