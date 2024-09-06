const button = document.querySelector(".numbers");
const display = document.querySelector(".display");
let operandOne = "";
let operandTwo = "";
let mathOperator = "";
let sum = 0;

function inputNum(e) {
  if (e.target.id === "allclear") {
    operandOne = "";
    operandTwo = "";
    mathOperator = "";
    display.textContent = "";
  }

  if (e.target.className == "operator arth" && operandOne == "") {
    return;
  } else if (e.target.className == "operator arth") {
    mathOperator = e.target.id;
  }

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
  } else if (mathOperator != "") {
    if (e.target.className === "number btn") {
      operandTwo += e.target.innerText;
      display.textContent = `${operandTwo}`;
    }
  }
}

button.addEventListener("click", inputNum);

function operate(operator, num1, num2) {
  switch (operator) {
    case "add":
      sum = parseInt(num1) + parseInt(num2);
      break;
    case "minus":
      sum = parseInt(num1) - parseInt(num2);
      break;
    case "multiply":
      sum = parseInt(num1) * parseInt(num2);
      break;
    case "division":
      sum = parseInt(num1) / parseInt(num2);
  }
}

button.addEventListener("click", (e) => {
  if (e.target.id == "equals") {
    operate(mathOperator, operandOne, operandTwo);
    display.textContent = sum;
  }
});
