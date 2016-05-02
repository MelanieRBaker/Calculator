// 1.Create an HTML file that has two input fields to accept the two numbers to perform operations on.

// 2.Create 4 buttons to perform each of the basic mathematical functions (add, subtract, multiply, divide).

// 3.In your JavaScript, put an event listener on each of the buttons.

// 4.Copy the code below an implement a basic calculator.

// 5.When the user performs one of the operations, output the result to another DOM element of your choice.

var InputOne = document.getElementById("firstInput");
var InputTwo = document.getElementById("secondInput");

var addButton = document.getElementById("addition");
var subButton = document.getElementById("subtract");
var multButton = document.getElementById("multiply");
var divButton = document.getElementById("DIVIDE");

var result = document.getElementById("answer");



// Functions


function adding(a, b) {
  return a + b;
}

function subtracting(a, b) {
  return a - b;
}

function multiplying(a, b) {
  return a * b;
}

function dividing(a, b) {
  return a / b;
}
function calculate(maths, a, b){
  answer.innerHTML = maths(a, b);
}

/*This section does the event listeners */
addition.addEventListener("click", function() {
  calculate(adding, Number(firstInput.value), Number(secondInput.value));
});

subtract.addEventListener("click", function() {
  calculate(subtracting, Number(firstInput.value), Number(secondInput.value));
});

multiply.addEventListener("click", function() {
  calculate(multiplying, Number(firstInput.value), Number(secondInput.value));
});

divide.addEventListener("click", function() {
  calculate(dividing, Number(firstInput.value), Number(secondInput.value));
});


/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */


/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */


/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */


/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */



/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */
















