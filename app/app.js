var numberOne = document.querySelector("#numberOne");
var numberTwo = document.querySelector("#numberTwo");
var addNumbers = document.querySelector("#addNumbers");
var subtractNumbers = document.querySelector("#subtractNumbers");
var divideNumbers = document.querySelector("#divideNumbers");
var multiplyNumbers = document.querySelector("#multiplyNumbers");
var answer = document.querySelector("#answer");
var clear = document.querySelector("#clear");
var sum = 0;
answer.innerHTML = sum;

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function multiply (a, b) {
  return a * b;
}

addNumbers.addEventListener("click", function(e) {

  sum = add(Number(numberOne.value), Number(numberTwo.value));
  answer.innerHTML = sum;

});

subtractNumbers.addEventListener("click", function(e) {

  sum = subtract(Number(numberOne.value), Number(numberTwo.value));
  answer.innerHTML = sum;

});

divideNumbers.addEventListener("click", function(e) {

  sum = divide(Number(numberOne.value), Number(numberTwo.value));
  answer.innerHTML = sum;

});

multiplyNumbers.addEventListener("click", function(e) {

  sum = multiply(Number(numberOne.value), Number(numberTwo.value));
  answer.innerHTML = sum;

});

clear.addEventListener("click", function(e) {
  sum = 0;
  answer.innerHTML = sum;
});

console.log(sum);
