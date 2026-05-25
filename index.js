let result = 0;
const display = document.querySelector('#display');

function add(a, b) {
  result = a + b;
  return result;
}

function subtract(a, b) {
  result = a - b;
  return result;
}

function multiply(a, b) {
  result = a * b;
  return result;
}

function divide(a, b) {
  result = a / b;
  result = Number(result.toFixed(2));
  return result;
}

// LOGIC
let arrValues = ['', '', ''];

const buttonsDiv = document.querySelector('#buttons');
buttonsDiv.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    let value = event.target.innerText;
    if (event.target.dataset.type != 'operator') {
      if (arrValues[1] == '') {
        arrValues[0] += value;
      } else {
        arrValues[2] += value;
      }
    } else {
      arrValues[1] = value;
    }
    console.log(arrValues[0], arrValues[1], arrValues[2]);
    operate(arrValues[0], arrValues[1], arrValues[2]);
  }
});

function operate(a, operator, b) {
  // when operating on numbers, convert strings to numbers
  a = +a;
  b = +b;

  if (operator) {
    display.innerText = arrValues[0] + arrValues[1] + arrValues[2];
    if (operator == '+') {
      add(a, b);
      // displayResult(result);
    } else if (operator == '-') {
      subtract(a, b);
    } else if (operator == '*') {
      multiply(a, b);
    } else if (operator == '/') {
      divide(a, b);
    } else if (operator == 'AC') {
      clearResult();
    } else {
      console.log('error');
    }
    if(arrValues[0] && arrValues[1] && arrValues[2]){
      displayResult(result);
    }
  }
}

function displayResult(result) {
  // display mei add input being displayed too
  arrValues[0] = result;
  display.innerText = arrValues[0];
  arrValues[1] = '';
  arrValues[2] = '';
}

function clearResult() {
  // reset all ds
  display.innerText = 0;
  arrValues[0] = '';
  arrValues[1] = '';
  arrValues[2] = '';
}
