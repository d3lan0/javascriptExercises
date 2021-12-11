const add = function(num1, num2) {
	let sum = num1+num2;
  return sum;
};

const subtract = function(num1, num2) {
	let diff = num1 - num2;
  return diff;
};

const sum = function(arr) {
	let sum = arr.reduce(((a,b) => a+b),0);
  return sum;
};

const multiply = function(arr) {
  let product = arr.reduce(((a,b) => a * b),1);
  return product;
};

const power = function(a,b) {
  let pow = a ** b //arr.reduce(((a,b) => a - b),1);
  return pow;
};

const factorial = function(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++){
      fact = i * fact;
  }
	return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
