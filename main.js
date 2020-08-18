function add(n, m) {
	return n + m;
}

function subtract(n, m) {
	return n - m;
}

function multiply(n, m) {
	return n * m
}

function sum(array) {
	let result = array.reduce(function(counter, element) {
		return counter += element;
	}, counter = 0);
	return result
}

function multiply(array) {
	let result = array.reduce(function(counter, element) {
		return counter *= element;
	}, counter = 1);
	return result
}

function power(n, m) {
	let result = n;
	let i = 1;
	while (i < m) {
		result *= n;
		i++;
	}
	return result
}

function factorial(num) {
	if (num == 0) {
		return 1
	}
	let x = num;
	while (x > 1) {
		num *= x - 1
		x--
	}
	return num
}

function divide(n, m) {
	if (n == 0 || m == 0) {
		return "error"
	} else {
		return n / m
	}
}