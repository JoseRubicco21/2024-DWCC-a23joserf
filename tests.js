/* Trying to change scope of variables with weird assigments */

let i = 2;

function test() {
	let k;
	k ??= doSomething(i); // function calls fall to undefined
	console.log(i);
	console.log(typeof k);
	console.log(typeof console.log());
	console.log(typeof doSomething(1)); // Expecting number here : Got Number
}
// void return types are undefined ????

// function definition
function doSomething(int) {
	return int;
}

test();

/* Register void as undefined */

console.log(typeof console.log()); // Expecting void : Got Undefined

// Does a !. exist? In Ts yes but in JS?

let perro = {
	nombres: {
		diminutivo: 'baltito',
		completo: 'balto',
	},
};
// Non-null asserts are only usable in TS.
//console.log(perro!.nombres!.diminutivo)

// Using expressions in case:
let x = true;

switch (x) {
	case 0 > -100:
		console.log('Works'); // Executes, you can actually have expr as cases
		break;
	default:
		console.log("It doesn't");
}

let fruit = 'Papaya';

switch (fruit) {
	case 'Mango' || 'Papaya':
		console.log('Mangoes and papayas are cool I guess');
		break;
	default:
		console.log(':(');
		break;
}
