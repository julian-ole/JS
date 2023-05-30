// 1. Напишите программу калькулятора со switch, обработайте возможные ошибки ввода

let a = 1000;
let b = 665;
let operator = "/";

switch (operator) {
  case "+":
    console.log(a, "+", b, "=", a + b);
    break;
  case "-":
    console.log(a, "-", b, "=", a - b);
    break;
  case "*":
    console.log(a, "*", b, "=", a * b);
    break;
  case "/":
    console.log(a, "/", b, "=", parseFloat(a / b).toFixed(2));
    switch (b) {
      case 0:
      case "0":
        console.log("The accomplishing is impossible");
        break;
      default:
        break;
    }
    break;
  default:
    console.log("Incorrect value");
}
