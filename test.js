//TEST TEST TEST TEST TEST

let temporary = '';
//this will be the first number n
let firstInput;
//this is the operator
let operator;
//this is m the second numver
let secondInput;
//this is the final result
let result;
//this is for the screen
const screen = document.querySelector('#screen');
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
function evaluation(temp) {
	if (isNaN(parseInt(temp))) {
		//if temporary is not a number then is an operator
		//so call a function for that 
		return operatorCreation(temp);
	} else {
		//if temporary is a number then
		return numberCreation(temp);
	}
}
//operation function
//o is for the operator
function operatorCreation(o) {
	//if user click on answer then
	  if(o === "answer") {
		return useAnswer();
	  }else if (o === "CL") {
			return clean();
	} //if the user clicked on a number
	  else if (firstInput !== undefined) {
		if (o === "=") {
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

var saveMultipleDigits = '';
//this function fill up the numbers
function numberCreation(num) {
	//save the temporary variable in a permanent variable,
	saveMultipleDigits += num;
	//check for the length of variable
	if( saveMultipleDigits.length > 8){
		return
	} else {
		if (operator !== undefined) {
			secondInput = parseInt(saveMultipleDigits);
			screenCreation(secondInput);
		} else {
			firstInput = parseInt(saveMultipleDigits);
			screenCreation(firstInput);
		}
}}

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
	screenCreation(result);
	afterResult();
}

function subtract(n, m) {
	result = n - m;
	screenCreation(result);
	afterResult();
}

function multiply(n, m) {
	result = n * m;
	screenCreation(result);
	afterResult();
}

function divide(n, m) {
	if (n == 0 || m == 0) {
		//work on this
		return alert("yeah no, not happening")
	} else {
		result = n / m;
		screenCreation(result);
		afterResult();
	}
}

//this function reset everything after result is called
function afterResult(){
	firstInput = undefined;
	operator = undefined;
	secondInput = undefined;
}

//cleaning function
function clean() {
	firstInput = undefined;
	secondInput = undefined;
	result = undefined;
	operator = undefined;
	screen.value = '';
}

//useing again same result
function useAnswer(){
	firstInput = result;
}



//a screen creation function 
function screenCreation(v){
	let stringV = v.toString();
	//if the value is too long stop at 10 digit
	if( stringV.length > 10){
		screen.value = stringV.substr(0,11);
	} else {
		screen.value = stringV;
	}
}

