//this is what you see on the screen
const screen = document.querySelector('#screen');
//this will be the first number n
let displayedValue;
//this is the operator
let operator;
const nums = document.querySelectorAll('.buttons');
let calcButton;
	for (var i = 0; i < nums.length; i++) {
	    calcButton = nums[i];
		calcButton.addEventListener('click', populate)}
		
		
		function populate(e){
			//if you click NaN add run different
			if(isNaN(parseInt(this.value))==true){
				//if is an operator store ths value for later
				operator = (this.value);
				console.log(operator)
				return 
				//if you click a number add it somewhere as number and add it in the screen as text.
			}else{
				//if text on screen is to long stop it
				if(screen.value.length ==20){
					return console.log('too many numbers')
					//otherways keep adding
				}else{
					screen.value += this.value;
					//this will be used later as n
					displayedValue = parseInt(screen.value)
				}
			}
			console.log(displayedValue)
		}
	

		function operate(n,operator,m){
			if(operator == '+') {
			 return add(n,m);
			}else if(operator == "-"){
			return subtract(n,m);
		}else if( operator == "*"){
			return multiply(n,m);
		}else if (operator == "/"){
				return divide(n,m)
		}
		}
