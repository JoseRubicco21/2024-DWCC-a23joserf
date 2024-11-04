'use-strict';

let x = 100;
let y = 50;

/* On this example, the variable test becomes Window. So not delcaring let or const makes it var.

The global with 'var' is defined in the function scope.
*/
function sum(a, b) {
	var test = a + b;
	return test;
}

console.log(sum(x, y));
console.log(sum(10, 20));
