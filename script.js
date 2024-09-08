const button = document.querySelector(".numbers");
const display = document.querySelector(".display");
let operandOne = "";
let operandTwo = "";
let mathOperator = "";
let total = 0;

function clearAll() {
  operandOne = "";
  operandTwo = "";
  mathOperator = "";
  display.textContent = "";
  display.classList.add("one");
  display.style.cssText = "font-size: 80px";
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
  if (operandOne.length == 1 || operandTwo.length == 1) clearAll();

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
  if (operandOne.length != 0) {
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

function totalValue() {
  operate(mathOperator, operandOne, operandTwo);
  total = total.toString();
  checkSumDecimal = total.split("");
  if (total.length > 10) {
    if (checkSumDecimal.includes(".")) {
      total = checkSumDecimal.join("");
      display.style.cssText = "font-size: 40px; align-items: flex-end;";
      total = parseFloat(total);
      display.textContent = total.toFixed(6);
    } else {
      total = parseFloat(total);
      total = total.toExponential(4);
      display.textContent = total;
    }
  } else {
    display.textContent = total;
  }
}

function operate(operator, num1, num2) {
  switch (operator) {
    case "add":
      total = parseFloat(num1) + parseFloat(num2);
      break;
    case "minus":
      total = parseFloat(num1) - parseFloat(num2);
      break;
    case "multiply":
      total = parseFloat(num1) * parseFloat(num2);
      break;
    case "division":
      total = num2 == 0 ? "lull" : parseFloat(num1) / parseFloat(num2);
  }
}

document.addEventListener("keydown", (e) => {
  const numpad = document.querySelector(`[data-code=${e.code}]`);
  const numAll = Array.from(document.querySelectorAll(`[data-code]`));
  numAll.forEach((item) => {
    let attri = item.getAttribute("data-code");
    if (e.code === attri) numpad.click();
  });
});

button.addEventListener("click", (e) => {
  if (e.target.id === "allclear") clearAll();
  if (e.target.className === "number btn") userInput(e);
  if (e.target.className === "operator arth") addOperator(e);
  if (e.target.id === "percent") percentage();
  if (e.target.id === "sign") changeSign();
  if (e.target.id === "backspace") backspace();
  if (e.target.id === "decim") decimal();
  if (e.target.id === "equals") totalValue();
});
