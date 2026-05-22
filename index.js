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
let arrValues = ['', '', ''];

const buttonsDiv = document.querySelector('#buttons');
buttonsDiv.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    // should I use strict equality? -> Yes you should
    let value = event.target.innerText;
    if (event.target.dataset.type != 'operator') {
      if(arrValues[1] == ''){
        arrValues[0] += value;
      }else{
        arrValues[2] += value;
      }
    } else {
      arrValues[1] = value;
    }
    operate(arrValues[0], arrValues[1], arrValues[2]);
  }
});

function operate(a, operator, b) {
  a = +a;
  b = +b;
  console.log(operator);
  if(operator){
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
}
const display = document.querySelector('#display');

function displayResult(result) {
  display.innerText = result;
  arrValues[0] = result;
  arrValues[1] = '';
  arrValues[2] = '';
}
function clearResult() {
  display.innerText = 0;
  arrValues[0] = '';
  arrValues[1] = '';
  arrValues[2] = '';
}
