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

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
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
    // console.log(event.target.innerText);
    let num1 = 0;
    let num2 = 0;
    if(event.target.dataset.type == "function"){
      console.log("function was clicked");
    }else if(event.target.dataset.type == "operator"){
      let operator = event.target.innerText;
      operate(num1, num2, operator);
    }else{
      console.log("number was clicked");
    }
  }
});

function operate(a, b, operator) {
  if(operator == '+'){
    console.log("hello");
    add(a, b);
  }else if(operator == '-'){
    subtract(a, b);
  }else if(operator == '*'){
    multiply(a, b);
  }else if(operator == '/'){
    divide(a, b);
  }else if(operator == '='){
    displayResult();
  }else if(operator == 'AC'){
    clearResult();
  }else{
    console.log("error");
  }
}

function displayResult() {}
function clearResult() {}