/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
  return number1 + number2;
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);

function addNumbers() {
  let addNumber1 = Number(document.querySelector("#add1").value);
  let addNumber2 = Number(document.querySelect("#add2").value);

  document.querySelector("#sum").value = add(addNumber1 + addNumber2);
}

/* Function Expression - Subtract Numbers */
function substract(number1, number2) {
  return number1 - number2;
}

document
  .querySelector("#substractNumbers")
  .addEventListener("click", subtractNumbers);

function subtractNumbers() {
  let substractNumber1 = Number(document.querySelector("#substract1").value);
  let substractNumber2 = Number(document.querySelect("#substract2").value);

  document.querySelector("#difference").value = substract(
    substractNumber1 + substractNumber2
  );
}

/* Arrow Function - Multiply Numbers */
multiply = (number1, number2) => number1 * number2;

document
  .querySelector("#multiplyNumbers")
  .addEventListener("click", multiplyNumbers);

multiplyNumbers = () => {
  let multiplyNumber1 = Number(document.querySelector("#factor1").value);
  let multiplyNumber2 = Number(document.querySelect("#factor2").value);

  document.querySelector("#product").value = add(
    multiplyNumber1 + multiplyNumber2
  );
};

/* Open Function Use - Divide Numbers */
divide = (number1, number2) => number1 / number2;

document
    .querySelector("#divideNumbers")
    .addEventListener("click", divideNumbers);
/* Decision Structure */

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
