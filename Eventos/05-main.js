'use-strict';

function bind(element, event, funct) {
	if (element === null || element === undefined || element.length === 0)
		throw new ReferenceError('The element passed in is not defined. Aborting.');

	// Is it possible to get an ENUM of all DOMEvents? Or how do I get to check if Str is part of all the DOMElements
	// Do I need to actually construct an enum of these by myself?

	//  Since one can create custom events, searching for an ENUM of pre-defined is simply not good, so..
	// I'm just gonna check for str length, undefined or null.
	if (event.length === 0 || event === null || event === undefined)
		throw new ReferenceError(
			'The event passed cant be null, undefined, or empty.'
		);

	if (typeof funct != 'function')
		throw new ReferenceError('The element passed is not a function.');
	// Adds an event listner to the event. The function to execute is funct.
	element.addEventListener(`${event}`, funct);
}

function bindOneToMany(element, events, funct) {
	events.forEach((ev) => {
		bind(element, ev, funct);
	});
}

const showEventInfo = (ev) => console.log(`Executed: ${ev.type} on the image`);
const image = document.querySelector('img');

bindOneToMany(
	image,
	[
		'click',
		'dbclick',
		'contextmenu',
		'mousedown',
		'mouseup',
		'wheel',
		'mouseover',
		'mouseout',
		'dragstart',
		'drag',
		'dragend',
	],
	showEventInfo
);
