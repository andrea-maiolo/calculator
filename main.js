//to fix:

//create a button so the result can be used again 
//if you want you can use the result as first number, just don't clean after operations
//and edit the firstInput to be equal to result
//dividing by zero needs to be fixed
//allow only few digits for decimal when dividing
//clean console once finished
// EXTRA CREDIT: Users can get floating point numbers if they do the math required to get one, but they can’t type them in yet. Add a . button and let users input decimals! Make sure you don’t let them type more than one though: 12.3.56.5. It is hard to do math on these numbers. (disable the decimal button if there’s already one in the display)
// EXTRA CREDIT: Make it look nice! This can be a good portfolio project… but not if it’s UGLY. At least make the operations a different color from the keypad buttons.
// EXTRA CREDIT: Add a “backspace” button, so the user can undo if they click the wrong number.
// EXTRA CREDIT: Add keyboard support!

let temporary = '';
//this will be the first number n
let firstInput;
//this is the operator
let operator;
//this is m the second numver
let secondInput;
//this is the final result
let result;
//this create a function when nuttons are clikced
const nums = document.querySelectorAll('.buttons');
let calcButton;
for (var i = 0; i < nums.length; i++) {
	calcButton = nums[i];
	calcButton.addEventListener('click', populate)
}
//this function runs when buttons are clicked
//and store the button value in a temporary variable
function populate(e) {
	temporary = this.value;
	return evaluation(temporary);
}
//this function evaluates the temporary variable
function evaluation() {
	if (isNaN(parseInt(temporary))) {
		//if temporary is not a number then is an operator
		//so call a function for that 
		return operatorCreation(temporary);
	} else {
		//if temporary is a number then
		return numberCreation(temporary);
	}
}
//operation function
//o is for the operator
function operatorCreation(o) {
	//if the user clicked on a number
	if (firstInput !== undefined) {
		if (o === "CL") {
			return clean();
		} else if (o === "=") {
			saveMultipleDigits = '';
			return operations(firstInput, operator, secondInput);
		} else {
			operator = o;
			saveMultipleDigits = '';
		}
		//if the first thing that the user click is an operator don't do anything
	} else {
		return
	}
}

function operations(a, o, c) {
	if (o === '+') {
		return add(a, c);
	} else if (o === "-") {
		return subtract(a, c);
	} else if (o === "*") {
		return multiply(a, c);
	} else if (o === "/") {
		return divide(a, c)
	}
}

function add(n, m) {
	result = n + m;
	console.log(result);
	//after this n shuld be cleaned
	//and operator too
	firstInput = undefined;
	operator = undefined;
	secondInput = undefined;
}

function subtract(n, m) {
	result = n - m;
	screen.value = result;
	console.log(result);
	//cleanings
	firstInput = undefined;
	operator = undefined;
	secondInput = undefined;
}

function multiply(n, m) {
	result = n * m;
	screen.value = result;
	console.log(result);
	//cleanings
	firstInput = undefined;
	operator = undefined;
	secondInput = undefined;
}

function divide(n, m) {
	if (n == 0 || m == 0) {
		//work on this
		return alert("https://www.youtube.com/watch?v=NKmGVE85GUU")
	} else {
		result = n / m;
		screen.value = result;
		console.log(result);
		//cleanings
		firstInput = undefined;
		operator = undefined;
		secondInput = undefined;
	}
}
//cleaning function
function clean() {
	firstInput = undefined;
	secondInput = undefined;
	result = undefined;
	// screen.value= '';
	operator = undefined;
}
var saveMultipleDigits = '';
//this function fill up the numbers
function numberCreation(num) {
	//save the temporary variable in a permanent number,
	//that will b used later
	//i need to save 2 numbers to make the operations work
	//the first number is called firstInput
	//the second number is called secondInput
	saveMultipleDigits += num;
	//if it's the first number that i am inputting in then save it as first number
	//otherwise save it as the second imput
	if (operator !== undefined) {
		secondInput = parseInt(saveMultipleDigits);
	} else {
		firstInput = parseInt(saveMultipleDigits);
	}
}