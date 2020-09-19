//here are some variables that I am going to use later.
//temporary is to evaluate one button at the time
//firstInput and secondInout are respectively the first and second number of the operation
//then we have the operator and the result, and finaly the screen
let temporary = '';
let firstInput;
let operator;
let secondInput;
let result;
const screen = document.querySelector('#screen');

const buttons = document.querySelectorAll('.buttons');
let calcButton;
for (var i = 0; i < buttons.length; i++) {
    calcButton = buttons[i];
    calcButton.addEventListener('click', buttonValue)
}
//this function runs when buttons are clicked
function buttonValue(e) {
    temporary = this.value;
    return evaluation(temporary);
}
//this function evaluates the temporary variable to see what to do with it
function evaluation(userInput) {
    if (isNaN(parseInt(userInput))) {
        return operatorCreation(userInput);
    } else {
        return numberCreation(userInput);
    }
}

function operatorCreation(o) {
    if (o === "answer") {
        return useAnswer();
    } else if (o === "CL") {
        return clean();
    } else if (firstInput !== undefined) {
        if (o === "=") {
            saveMultipleDigits = '';
            return operations(firstInput, operator, secondInput);
        } else if (o === "backspace") {
            return backSpace();
        } else if (o === ".") {
            numberCreation(o)
        } else if (o === "changeS") {
            return changeSign();
        } else {
            operator = o;
            saveMultipleDigits = '';
        }
        //if the first thing that the user click is an operator don't do anything
    } else {
        return
    }
}
//saveMultipleDigits is created outside the function because I will need to access it later from other functions 
let saveMultipleDigits = '';
function numberCreation(num) {
    saveMultipleDigits += num;
    if (saveMultipleDigits.length > 9) {
        return
    } else {
        if (operator !== undefined) {
            secondInput = parseFloat(saveMultipleDigits);
			screenPopulation(secondInput);
        } else {
            firstInput = parseFloat(saveMultipleDigits);
			screenPopulation(firstInput);
        }
    }
}

function operations(firstNumber, o, secondNumber) {
    if (o === '+') {
        return add(firstNumber, secondNumber);
    } else if (o === "-") {
        return subtract(firstNumber, secondNumber);
    } else if (o === "*") {
        return multiply(firstNumber, secondNumber);
    } else if (o === "/") {
        return divide(firstNumber, secondNumber)
    }
}

function add(n, m) {
	result = n + m;
	screenPopulation(result);
    afterResult();
}

function subtract(n, m) {
	result = n - m;
	screenPopulation(result);
    afterResult();
}

function multiply(n, m) {
	result = n * m;
	screenPopulation(result);
    afterResult();
}

function divide(n, m) {
    if (n == 0 || m == 0) {
        return alert("task failed successfully")
    } else {
		result = n / m;
		screenPopulation(result);
        afterResult();
    }
}

//this function clean everything after result is called
function afterResult() {
    firstInput = undefined;
    operator = undefined;
    secondInput = undefined;
}

function clean() {
    firstInput = undefined;
    secondInput = undefined;
    result = undefined;
    operator = undefined;
    screen.value = '';
    saveMultipleDigits = ''
}

function useAnswer() {
    firstInput = result;
}

function changeSign() {
    if (screen.value === 0) {
        return
    } else {
        let number = parseInt(screen.value);
        if (number === firstInput) {
            number = -number;
            firstInput = number;
        } else if (number === secondInput) {
            number = -number;
            secondInput = number;
		}
		screenPopulation(number);
    }
}

function backSpace() {
    saveMultipleDigits = saveMultipleDigits.substr(0, saveMultipleDigits.length - 1)
    screen.value = screen.value.substr(0, screen.value.length - 1)
}

function screenPopulation(val) {
    if (val == firstInput || val == secondInput) {
        screen.value = val;
    } else {
        if (val % 1 == 0) {
            let valString = val.toString();
            let valLength = Math.log(val) * Math.LOG10E + 1 | 0;
            valLength -= 9;
            if (valLength <= 0) {
                screen.value = val;
            } else {
                screen.value = valString.substr(0, 9) + "e+" + valLength;
            }
        } else {
            valString = val.toFixed(2);
            screen.value = valString;
        }
    }
}
//this is for keyboard support
window.addEventListener('keydown', (e) => {
    if (e.key >= "0" && e.key <= "9") {
        evaluation(e.key);
    } else {
        switch (e.key) {
            case e.key = "Enter":
                evaluation("=");
                break;
            case e.key = "+":
                evaluation("+");
                break;
            case e.key = "-":
                evaluation("-");
                break;
            case e.key = "*":
                evaluation("*");
                break;
            case e.key = "/":
                evaluation("/");
                break;
            case e.key = "Backspace":
                evaluation("backspace");
                break;
            case e.key = ".":
                evaluation(".");
				break;
        }
    }
});