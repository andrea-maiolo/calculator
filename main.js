//to fix: 
//il segno di result viene messo alla fine quando negativo
//work on svg
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
	if( o === "."){
		numberCreation(o)
	}
	//if user click on answer then
	 else if(o === "answer") {
		return useAnswer();
	  }else if (o === "CL") {
			return clean();
	}//if the user clicked on a number first
	  else if (firstInput !== undefined) {
		if (o === "=") {
			saveMultipleDigits = '';
			return operations(firstInput, operator, secondInput);
		}else if (o === "backspace"){
			return backSpace();
		}else {
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
			secondInput = parseFloat(saveMultipleDigits);
			screenCreation(secondInput);
		} else {
			firstInput = parseFloat(saveMultipleDigits);
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


mySvg = document.getElementById("svg");
mySvg.addEventListener('click', backSpace)
function backSpace(){
	saveMultipleDigits = saveMultipleDigits.substr(0, saveMultipleDigits.length-1)
	screen.value = screen.value.substr(0,screen.value.length-1)
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


// use data-key in div or button so you can use this as id or class
//   function removeTransition(e) {
//     if (e.propertyName !== 'transform') return;
//     e.target.classList.remove('playing');
//   }

//   function playSound(e) {
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
//     if (!audio) return;

//     key.classList.add('playing');
//     audio.currentTime = 0;
//     audio.play();
//   }

//   const keys = Array.from(document.querySelectorAll('.key'));
//   keys.forEach(key => key.addEventListener('transitionend', removeTransition));
//   window.addEventListener('keydown', playSound);