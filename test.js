//to fix:
//oparetor can be changed after n adn m are selected
//allow number bigger than one digit
//allow only few digits for decimal when dividing
//CL is NOT an operator make it clear everithing
//1). Users should be able to string together
//several operations and get the right answer, 
//with each pair of numbers being evaluated at a time.
//For example, 12 + 7 - 5 * 3 = should yield 42
//clean console once finished
//dividing by zero needs to be fixed





//this is what you see on the screen
const screen = document.querySelector('#screen');
//this will be the first number n
let firstNumber;
//this is the operator
let operator;
//this is m the second numver
let secondNumber;
//this is the final result
let result;
//this create a function when nuttons are clikced
const nums = document.querySelectorAll('.buttons');
let calcButton;
	for (var i = 0; i < nums.length; i++) {
	    calcButton = nums[i];
		calcButton.addEventListener('click', populate)}
		
		//this function runs when buttos are clicked
		function populate(e){
			//if you click NaN add operator or run operation
			if(isNaN(parseInt(this.value))==true){
				//if operator equal to =
				if(this.value === '='){
					//run operation
					return operation(firstNumber,operator,secondNumber)
				}else{
				//if is an operator store the value
				operator = (this.value);
				console.log(operator)
					//show operator??
				//stop adding numbers to screen and n
				screen.value = '';
				return 
				}
				//if you click a number add it to the screen as text.
			}else{
				//if text on screen is to long stop it
				if(screen.value.length ==10){
					return console.log('too many numbers')
					//otherways keep adding
				}else{
					//rethink this because it causes problems
					if(firstNumber == undefined && operator == undefined){
					//if n and oparator are undefined create and add n
					screen.value = this.value;
					//this will be used later
					firstNumber = parseInt(screen.value)
					console.log(firstNumber)
					}else{
						//add value to m
						screen.value =this.value;
						secondNumber = parseInt(screen.value);
						console.log(secondNumber)
					}
				}
			}
		}
	



		//check the operator and run proper math function
		//a is the firstNumber, o is operator and c id secondNumber
		function operation(a,o,c){
			if(o == '+') {
			 return add(a,c);
			}else if(o == "-"){
			return subtract(a,c);
		}else if( o == "*"){
			return multiply(a,c);
		}else if (o == "/"){
				return divide(a,c)
		}
		}



						




		//the screen must be cleaned befor diplaying the result
		function add(n, m) {
			result = n+m;
			screen.value = result;
			console.log(result);
			//after this n shuld be cleaned
			//and operator too
			firstNumber= undefined;
			operator = undefined;
			return result;
		}
		
		function subtract(n, m) {
			result= n - m;
			screen.value = result; 			console.log(result);
			firstNumber= undefined;
			operator = undefined;
			return result;
		}
		
		function multiply(n, m) {
			result= n * m;			screen.value = result;			console.log(result);
			firstNumber= undefined;
			operator = undefined;
			return result;
		}
		
		function divide(n, m) {
			if (n == 0 || m == 0) {
				//work on this
				return alert("https://www.youtube.com/watch?v=NKmGVE85GUU")
			} else {
				result =n / m		;	screen.value = result;			console.log(result);
				firstNumber= undefined;
				operator = undefined;
	
				return result;
			}
		}