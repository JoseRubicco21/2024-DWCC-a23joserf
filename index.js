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

const n = new CustomEvent('eventTest');
