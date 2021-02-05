/*

Create a simple calculator that can add, subtract, multiply, and divide two numbers

1. Have two inputs for the user to put in 2 numbers
2. When an operation (+, -, *, /) is pushed, the 2 numbers are stored in variables
3. Perform addition, subtraction, multiplication, and division on the numbers
4. Display the sum, difference, product, and quotient of the two numbers
    -  You will need a display area on your page

CHALLENGE:
- When dividing, display the answer as a whole number quotient with remainder (no decimals)

HINT: you will need Modulus %

*/

function add() {
    document.querySelector(".output").innerHTML = number1() + number2()
}

function sub() {
    document.querySelector(".output").innerHTML = number1() - number2()
}

function mul() {
    document.querySelector(".output").innerHTML = number1() * number2()
}

function div() {
    let quotient = number1() / number2()
    quotient = parseInt(quotient)
    let remainder = number1() % number2()
    document.querySelector(".output").innerHTML = `${quotient} ... ${remainder}`
}

function number1() {
    let num1 = document.querySelector(".number1").value
    num1 = parseInt(num1)
    return num1
}

function number2() {
    let num2 = document.querySelector(".number2").value
    num2 = parseInt(num2)
    return num2
}