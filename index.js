'use strict';
// Using strcit mode for at least some error handling. Why does JS doesn't have error handling...

console.log('Un fichero index.js que sirve como entrypoint');

const link = document.querySelector('.ls');

link.addEventListener('click', () => {
	console.log(
		'Asi se supone que se deberia añadir, querySelector + addEventListener'
	);
});

// Posible generalization of event listener adder?

function addEventListnerToAnyDocumentNode(selector, event, func) {
	let element = document.querySelector(`${selector}`);
	element.addEventListener(`${event}`, func);
}

// Yeah so it works I guess. The question if is there's any real use against other options.
addEventListnerToAnyDocumentNode('.lss', 'click', () => {
	console.log('Generalized lol');
});

// Things like a const elem = document.querySelector(selector) then forEachOfEvents
// Generalized of generalized where key : v passing 2 arrays? so...

function eventListenerBinder(selector, events, funcs) {
	let element = document.querySelector(`${selector}`);

	if (events.length !== funcs.length) {
		// throw an error here.
		console.error("Arrays do not match in size. Can't bind 1:1");
		return;
	} else {
		for (let i = 0; i < events.length; i++) {
			element.addEventListener(events[i], funcs[i]);
			console.log(`Added the function ${funcs[i]} to the event ${events[i]}`);
		}
	}
}

let tts = 0;
//console.log(tt); // Shows an Uncaught Reference Error. Should be tts instead of tt.

let events = ['click', 'load'];
let funcs = [
	() => {
		console.log('click');
	},
	() => {
		console.log('load');
	},
];

console.log(NaN == undefined);
console.log(NaN === undefined);

eventListenerBinder('.lss', events, funcs);

const functest = () => {
	console.log(2);
};

console.log(typeof functest);

const t = {};
console.dir(t);
t.p = 111;
console.dir(t);

console.log(+'0'); // False. PLEASE HELP.

console.log(undefined == null); // non-strict
console.log(undefined === null); // strict

console.log('false' == +false); // false
console.log(+'false' == +true); // false -- Converts "+true" --> "1" and compares to "false" == "1" wich is false. Please help.
console.log(Boolean('False') == +true); // true;  strs are truthy
console.log(+'false'); // NaN

console.log('For: 0 vs any other number');
console.log('0' < '1'); // alphabeticall order is more or less this one : A-Za-z0-9
console.log('For a < A');
console.log('a' < 'A');

const n = new CustomEvent('eventTest');

/**
 *
setTimeout(() => {
	// doSomething :tm:
}, 3000); // 3000ms
*/

/*
setInterval(() => {
	c++;
	console.log(c);
}, 1000);
*/
/*
function count(count) {
	count++;
	console.log(count);
} */

//setInterval(() => count(c), 1000);

console.log('2' == 2); // true
let a = 4,
	b = 5,
	c = '5';

console.log('a = ' + a + ', b = ' + b + ', c = ' + c); // " a str with all the stuff?" - yep
console.log("'b == c' -> " + (b == c)); // "b == c -> true" - yep
console.log("'b === c' -> " + (b === c)); // false - yep
console.log("'b != c' -> " + (b != c)); // false ? - yep
console.log("'b !== c' -> " + (b !== c)); //true - yep
console.log("'a == b' -> " + (a == b)); // false - yep
console.log("'a != b' -> " + (a != b)); // true - yep

let m;
m ??= 3;
console.log(m);

let z;

z = null ?? console.log("please don't work");

/**
 * So I, is defined in global and lexical scope
 * in cursed k = null ?? or the console log of i.
 * So in order to make k = i then one needs to do ??= No lol
 *
 */
// let i = 33;
// function cursed() {
// 	let k;
// 	k ??= cursed2(); // function calls fall to undefined
// 	console.log(i);
// 	console.log(typeof k);
// 	//console.log(typeof console.log);
// }
// cursed();

// void return types are undefined ????

// function definition
function cursed2() {
	return 2;
}
