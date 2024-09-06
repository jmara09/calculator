const button = document.querySelector(".numbers");
const display = document.querySelector(".display");
let operandOne = "";
let operandTwo = "";
let mathOperator = "";

function inputNum(e) {
  if (e.target.id === "allclear") {
    operandOne = "";
    operandTwo = "";
    mathOperator = "";
    display.textContent = "";
  }
  if (e.target.className == "operator" && operandOne == "";)
  if (operandOne.length == 10) return;
  if (mathOperator == "") {
    if (e.target.className === "number btn") {
      operandOne += e.target.innerText;
      display.textContent = `${operandOne}`;
    }
    // console.log(operandOne);
    // operandOne = operandOne.split("");
    // operandOne.splice(1, 1);
    // console.log(operandOne);
  } else if (mathOperator != "")
}

button.addEventListener("click", inputNum);

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
