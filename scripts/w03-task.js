/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */

/* Function Definition - Add Numbers */
function add(number1, number2) {
  return number1 + number2;
}

document.querySelector("#addNumbers").addEventListener("click", sumNumbers);

function sumNumbers() {
  let addNumber1 = Number(document.querySelector("#add1").value);
  let addNumber2 = Number(document.querySelector("#add2").value);
  document.querySelector("#sum").value = add(addNumber1, addNumber2);
}

/* Function Expression - Subtract Numbers */
let subtract = function (number1, number2) {
  return number1 - number2;
};

document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

function subtractNumbers() {
  let subtractNumber1 = Number(document.querySelector("#subtract1").value);
  let subtractNumber2 = Number(document.querySelector("#subtract2").value);
  document.querySelector("#difference").value = subtract(subtractNumber1, subtractNumber2);
}

/* Arrow Function - Multiply Numbers */
let multiply = (number1, number2) => number1 * number2;

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

function multiplyNumbers() {
  let multiplyNumber1 = Number(document.querySelector("#factor1").value);
  let multiplyNumber2 = Number(document.querySelector("#factor2").value);
  document.querySelector("#product").value = multiply(multiplyNumber1, multiplyNumber2);
}

/* Arrow Function - Divide Numbers */
let divide = (number1, number2) => number1 / number2;

document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

function divideNumbers() {
  let divideNumber1 = Number(document.querySelector("#dividend").value);
  let divideNumber2 = Number(document.querySelector("#divisor").value);
  document.querySelector("#quotient").value = divide(divideNumber1, divideNumber2);
}

/* Decision Structure */
function calculateTotal(subtotal, applyDiscount) {
  const discountRate = applyDiscount ? 0.9 : 1;
  return subtotal * discountRate;
}

document.querySelector("#getTotal").addEventListener("click", function () {
  let subtotal = Number(document.querySelector("#subtotal").value);
  let applyDiscount = document.querySelector("#member").checked;
  let total = calculateTotal(subtotal, applyDiscount);
  document.querySelector("#total").textContent = total.toFixed(2);
});

/* ARRAY METHODS - Functional Programming */

/* Output Source Array */
// Output Source Array
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

document.getElementById("array").textContent = numbersArray.toString();

let oddNumbers = numbersArray.filter(function (number) {
  return number % 2 === 1;
});
document.getElementById("odds").textContent = oddNumbers.toString();

document.getElementById("evens").textContent = numbersArray.filter((number) => number % 2 === 0).toString();

let multipliedArray = numbersArray.map((number) => number * 2);
let sumOfMultiplied = multipliedArray.reduce((sum, number) => sum + number, 0);
document.getElementById("sumOfMultiplied").textContent = sumOfMultiplied;

function calculateTotal(subtotal, applyDiscount) {
  const discountRate = applyDiscount ? 0.9 : 1;
  return subtotal * discountRate;
}
