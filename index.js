function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  if (a >= b) {
    return a - b;
  } else {
    return b - a;
  }
}

function multiply() {
  return a * b;
}

function divide() {
  if (a >= b) {
    return a / b;
  } else {
    return b / a;
  }
}

const buttonsDiv = document.querySelector('#buttons');
buttonsDiv.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    // should I use strict equality? -> Yes you should
    console.log(event.target.innerText);
  }
});

function operate(a, b, operator) {}

function displayResult() {}
