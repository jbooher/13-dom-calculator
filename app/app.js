var addNumbers = document.querySelector("#addNumbers");
var subtractNumbers = document.querySelector("#subtractNumbers");
var divideNumbers = document.querySelector("#divideNumbers");
var multiplyNumbers = document.querySelector("#multiplyNumbers");
var answer = document.querySelector("#answer");
var equals = document.querySelector("#equals");
var clear = document.querySelector("#clear");
var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");
var four = document.querySelector("#four");
var five = document.querySelector("#five");
var six = document.querySelector("#six");
var seven = document.querySelector("#seven");
var eight = document.querySelector("#eight");
var nine = document.querySelector("#nine");
var zero = document.querySelector("#zero");
var decimal = document.querySelector("#decimal");
var sum = 0;

var display = "";
answer.innerHTML = display;

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

var addToDisplay = function(value) {
  if(value === zero && display.length < 1) {
    console.log("Error");
  }
  else {
    display = display + value.innerHTML;
    console.log(display);
    answer.innerHTML = "";
    answer.innerHTML = display;
  }
}

//NUMBER BUTTONS

one.addEventListener("click", addToDisplay.bind(null, one));
two.addEventListener("click", addToDisplay.bind(null, two));
three.addEventListener("click", addToDisplay.bind(null, three));
four.addEventListener("click", addToDisplay.bind(null, four));
five.addEventListener("click", addToDisplay.bind(null, five));
six.addEventListener("click", addToDisplay.bind(null, six));
seven.addEventListener("click", addToDisplay.bind(null, seven));
eight.addEventListener("click", addToDisplay.bind(null, eight));
nine.addEventListener("click", addToDisplay.bind(null, nine));
zero.addEventListener("click", addToDisplay.bind(null, zero));
decimal.addEventListener("click", addToDisplay.bind(null, decimal));

//EQUATIONS
addNumbers.addEventListener("click", addToDisplay.bind(null, addNumbers));
subtractNumbers.addEventListener("click", addToDisplay.bind(null, subtractNumbers));
divideNumbers.addEventListener("click", addToDisplay.bind(null, divideNumbers));
multiplyNumbers.addEventListener("click", addToDisplay.bind(null, multiplyNumbers));

equals.addEventListener("click", function(e) {
  sum = eval(display);
  answer.innerHTML = "";
  answer.innerHTML = sum;
});

clear.addEventListener("click", function(e) {
  display = "";
  answer.innerHTML = display;
});
