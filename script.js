const button = document.querySelector(".numbers");
const display = document.querySelector(".display");
let operandOne = 0;
let operandTwo = 0;
let mathOperator;

button.addEventListener("click", (e) => {
  if (e.target.className === "number btn") {
    console.log(e.target.className);
    operandOne = e.target.innerText;
    display.textContent = `${operandOne}`;
    console.log(operandOne);
  }
});

function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
  }
}
