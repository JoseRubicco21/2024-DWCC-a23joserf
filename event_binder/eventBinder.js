'use-strict';

// EventBinder a simple js lib to bind eventListeners faster, easier and using first-class functions.
// or anonymous ones. This is just an abstraction to code faster in case there's a lot of event binding going.

// Probably is best to define an enum of possible strategies for binding? something like
// bindStrategy : oneToOneToOne - bind
// bindStrategy : manyToOneToOne - bindToAllElements
// bindStrategy : oneToManyToOne - bindToAllEvents
// bindStrategy : oneToManyToMany
// bindStrategy : manyToManyToMany

// Still need to think trugh this as one binding can only have a funct.
// bind serves as bindOneToOne.
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

	const element = element;
	// Adds an event listner to the event. The function to execute is funct.
	element.addEventListener(`${event}`, funct);
}

// It would be better to rethink this since it's actually a N:M:P relationship rather than what it seemed as N:M.

// How do I define direction of Many to One or One to Many?
// Binds many element to the same event with the same function.
function bindManyToOne(elements, event, funct) {
	elements.forEach((element) => {
		bind(element, event, funct);
	});
}

// Not super sure on how to implement this one
// Bind every event passed to every element. All-to-All
function bindManyToMany(elements, event, funct) {}

// binds a lot of events listeners to one element.
function bindOneToMany(element, event, funct) {}
