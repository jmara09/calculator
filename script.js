const button = document.querySelector(".numbers");
const display = document.querySelector(".display");
let operandOne = "";
let operandTwo = "";
let mathOperator = "";
let sum = 0;

function clearAll() {
  operandOne = "";
  operandTwo = "";
  mathOperator = "";
  display.textContent = "";
  display.classList.add("one");
}

function percentage() {
  if (display.className === "display one") {
    operandOne /= 100;
    display.textContent = operandOne;
  } else {
    operandTwo /= 100;
    display.textContent = operandTwo;
  }
}

function changeSign() {
  if (display.className === "display one") {
    operandOne = operandOne.split("");
    if (!operandOne.includes("-")) {
      operandOne.splice(0, 0, "-");
      operandOne = operandOne.join("");
      display.textContent = operandOne;
    } else {
      operandOne.splice(0, 1);
      operandOne = operandOne.join("");
      display.textContent = operandOne;
    }
  } else {
    operandTwo = operandTwo.split("");
    if (!operandTwo.includes("-")) {
      operandTwo.splice(0, 0, "-");
      operandTwo = operandTwo.join("");
      display.textContent = operandTwo;
    } else {
      operandTwo.splice(0, 1);
      operandTwo = operandTwo.join("");
      display.textContent = operandTwo;
    }
  }
}

function backspace() {
  if (display.className === "display one") {
    operandOne = operandOne.split("");
    operandOne.splice(operandOne.length - 1, 1);
    operandOne = operandOne.join("");
    display.textContent = operandOne;
  } else {
    operandTwo = operandTwo.split("");
    operandTwo.splice(operandTwo.length - 1, 1);
    operandTwo = operandTwo.join("");
    display.textContent = operandTwo;
  }
}

function decimal() {
  if (display.className === "display one") {
    operandOne = operandOne.split("");
    if (!operandOne.includes(".")) {
      operandOne.splice(operandOne.length, 0, ".");
      operandOne = operandOne.join("");
      display.textContent = operandOne;
    } else {
      operandOne = operandOne.join("");
    }
  } else {
    operandTwo = operandTwo.split("");
    if (!operandTwo.includes(".")) {
      operandTwo.splice(operandTwo.length, 0, ".");
      operandTwo = operandTwo.join("");
      display.textContent = operandTwo;
    } else {
      operandTwo = operandTwo.join("");
    }
  }
}

function addOperator(e) {
  if (operandOne != "") {
    mathOperator = e.target.id;
    display.classList.remove("one");
  }
}

function userInput(e) {
  if (display.className === "display one") {
    if (operandOne.length != 10) {
      operandOne += e.target.textContent;
      display.textContent = `${operandOne}`;
    }
  } else {
    if (operandTwo.length != 10) {
      operandTwo += e.target.textContent;
      display.textContent = `${operandTwo}`;
    }
  }
}

function sumValue() {
  operate(mathOperator, operandOne, operandTwo);
  sum = sum.toString();
  checkSumDecimal = sum.split("");
  if (sum.length > 10) {
    if (checkSumDecimal.includes(".")) {
      sum = parseFloat(checkSumDecimal.join(""));
      display.textContent = sum.toFixed(8);
    } else {
      sum = parseFloat(sum);
      sum = sum.toExponential(4);
      display.textContent = sum;
    }
  } else {
    display.textContent = sum;
  }
}

function operate(operator, num1, num2) {
  switch (operator) {
    case "add":
      sum = parseFloat(num1) + parseFloat(num2);
      break;
    case "minus":
      sum = parseFloat(num1) - parseFloat(num2);
      break;
    case "multiply":
      sum = parseFloat(num1) * parseFloat(num2);
      break;
    case "division":
      sum = num2 == 0 ? "lull" : parseFloat(num1) / parseFloat(num2);
  }
}

button.addEventListener("click", (e) => {
  if (e.target.id === "allclear") clearAll();
  if (e.target.className === "number btn") userInput(e);
  if (e.target.className === "operator arth") addOperator(e);
  if (e.target.id === "percent") percentage();
  if (e.target.id === "sign") changeSign();
  if (e.target.id === "backspace") backspace();
  if (e.target.id === "decim") decimal();
  if (e.target.id === "equals") sumValue();
});
