let result = 0;

function add(a, b) {
  result = a + b;
  return result;
}

function subtract(a, b) {
  if (a >= b) {
    result = a - b;
  } else {
    result = b - a;
  }
  return result;
}

function multiply(a, b) {
  result = a * b;
  return result;
}

function divide(a, b) {
  if (a >= b) {
    result = a / b;
  } else {
    result = b / a;
  }
  return result;
}

// LOGIC
let arrValues = [];

const buttonsDiv = document.querySelector('#buttons');
buttonsDiv.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    // should I use strict equality? -> Yes you should
    // console.log(event.target.innerText);
    let value = event.target.innerText;
    let operator, num1, num2;
    if (event.target.dataset.type == 'operator') {
      operator = value;
      arrValues.splice(2, 0, operator);
    } else {
      num1 = value;
      num2 = value;
      arrValues.splice(0, 0, num1);
      arrValues.splice(1, 0, num2);
    }
    console.log(arrValues[0], arrValues[1], arrValues[2]);
    operate(arrValues[0], arrValues[1], arrValues[2]);
  }
});

// function checkData(event){}

function operate(a, b, operator) {
  a = +a;
  b = +b;
  if (operator == '+') {
    add(a, b);
  } else if (operator == '-') {
    subtract(a, b);
  } else if (operator == '*') {
    multiply(a, b);
  } else if (operator == '/') {
    divide(a, b);
  } else if (operator == '=') {
    displayResult(result);
  } else if (operator == 'AC') {
    clearResult();
  } else {
    console.log('error');
  }
}

function displayResult(result) {
  const display = document.querySelector('#display');
  display.innerText = result;
}
function clearResult() {
  console.log('cleared');
}
