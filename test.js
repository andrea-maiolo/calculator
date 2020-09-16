//to fix:
// EXTRA CREDIT: Users can get floating point numbers if they do the math required to get one, 
//but they can’t type them in yet. 
//Add a . button and let users input decimals!
// Make sure you don’t let them type more than one though: 12.3.56.5.
//It is hard to do math on these numbers. (disable the decimal button if there’s already one in the display)
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
function evaluation(temp){
	switch(temp) {
		case temp === "1":
		case temp === "2":
		case temp === "3":
		case temp === "4":
		case temp === "5":
		case temp === "6":
		case temp === "7":
		case temp === "8":
		case temp === "9":
		case temp === "0":
			numberCreation(temp);
		  break;
		case temp === "+":
		case temp === "-":
		case temp === "*":
		case temp === "/":
			operator = temp;
			saveMultipleDigits ='';
		  break;
		case temp === "=":
			saveMultipleDigits = '';
			operations(firstInput, operator, secondInput);
		  break;
		case temp === "CL":
			clean();
		  break;
		case temp === "answer":
			useAnswer();
		  break;
		// case temp === "/":
		// 	operator = temp;
		// 	saveMultipleDigits ='';
		//   break;
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
	  }//if the user clicked on a number first
	  else if (firstInput !== undefined) {
		if (o === "=") {
			saveMultipleDigits = '';
			return operations(firstInput, operator, secondInput);
		}else if( o === "."){
			numberCreation(o)
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
	if( saveMultipleDigits.length > 9){
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
		return alert("error")
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



//screen creation function 
function screenCreation(v){
	if (v==firstInput || v==secondInput){
		screen.value = v;
	}else {
		if (v % 1 == 0){
			let vString = v.toString();
			screen.value = vString.substr(0,9);
		}else{
			vString = v.toFixed(2);
			screen.value = vString;
		}
	}
}