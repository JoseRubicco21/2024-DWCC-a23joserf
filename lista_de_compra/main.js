'use-strict';

/* List of important items needed for usual operations:
- "List items" div
- "Delete all button"
Inputs:
- "filter-items" input
- "add-items" input
 */

// Item-list
const itemList = document.querySelector('#item-list');
// Inputs:
const addItemsInput = document.querySelector('#add-item-input');
const filterItemsInput = document.querySelector('#filter-item');
const addItemsButton = document.querySelector('#add-item-button');
const deleteAllButton = document.querySelector('#delete-all-button');

// Statefulness - Things that should persist or have State that can change.
let todoItems = [];

// Function definitions:
// - When creating elements or anything to do with Loading / Saving I prefer to use classical function definitions.
// - When operating over data I prefer functional expressions.

// Utility function used to add n class to the classList prop of an element. Interfaces is supposed to be a varargs of
// classes to add.
//TODO Throws an exception if element param is not an HTMLElement.
//TODO Throws an exception if any value in cssClasses is not a str.

// Using an Array of predefined classes.
function addArrayOfClassesToElements(element, cssClasses) {
	cssClasses.forEach((cssClass) => element.classList.add(cssClass));
}

// Using a the varArgs / rest array.
function addClassesToElement(element, ...cssClasses) {
	element.classList.add(...cssClasses);
}

// Using the "class" str as html add every class of the str passed to the element.
function addClassesToElementBasedOnHTMLString(element, htmlClassString) {
	// Replace every space or more for a single space.
	htmlClassString = htmlClassString.replace(/\s+/g, ' ');
	// Split the tokens by spaces
	const cssClasses = htmlClassString.split(' ');
	// Add the classes
	cssClasses.forEach((cssClass) => element.classList.add(cssClass));
}

function setElementToDisableIfValueIsEmpty(element, value) {
	return value === '' || value == undefined || value.length === 0
		? (element.disabled = true)
		: (element.disabled = false);
}

//TODO Fix this lol
function toggleAddButtonToEditButton(element) {
	if (element.dataset.editing == false) {
		element.dataset.editing == true;
		element.classList.remove('btn-dark');
		element.classList.add('btn-sucess');
	} else {
		element.dataset.editing == false;
		element.classList.remove('btn-sucess');
		element.classList.add('btn-dark');
	}
}

// Returns the Item built. The value parameter comes from the input on submit event.
//TODO Throw exception if value is not something castable to str.
function createItemOfList(value) {
	// Create the items
	const item = document.createElement('div');
	const textValue = document.createElement('strong');
	const closeButton = document.createElement('button');
	// Add the corresponding Css classes
	addClassesToElementBasedOnHTMLString(
		item,
		'col-xl-5 col-lg-5 col-md-7 col-sm-7 alert alert-light alert-dismissible fade show border-dark-subtle'
	);
	addClassesToElementBasedOnHTMLString(closeButton, 'btn-close');
	// Build the structure of the item
	textValue.append(value);
	item.append(textValue);
	item.append(closeButton);

	return item;
}

// Event Listeners

// Item input. The text item. On input if it's empty we want disabled if there's no value.
addItemsInput.addEventListener('input', (event) => {
	setElementToDisableIfValueIsEmpty(addItemsButton, event.target.value);
});

//TODO change the listener to have the strategy patern based on a stateVariable.
// We want to create the element of List and append it when it's submitted. This is on the button element.
addItemsButton.addEventListener('click', (event) => {
	const newElementOfList = createItemOfList(addItemsInput.value);
	itemList.append(newElementOfList);

	// We set the value to empty then we disable to give the feel of submission.
	addItemsInput.value = ''; // --> "Deletes" the value from the input.
	setElementToDisableIfValueIsEmpty(addItemsButton, event.target.value); // --> sets the button to disabled because the value of the input is "".
});

// We want to add one event Listner for every single element we create. Doing it onto the element is feasable.
// Though this has a drawback it creates n event listeneres where n is equal to the number of list elements.
// using propagation we can circunvent this and make it more optimal.

itemList.addEventListener('click', (event) => {
	// If the event target is a "Buttton" then we delete the closest div, in this case itself.
	if (event.target.tagName == 'BUTTON') {
		event.target.closest('div').remove();
	}

	if (event.target.classList.contains('alert')) {
		toggleAddButtonToEditButton(addItemsButton);
	}
});

// We're going to be using the same technique to edit

deleteAllButton.addEventListener('click', () => {
	// Get the array of items in the children list.
	const items = Array.from(itemList.children);
	// For each child, remove it from the DOM.
	items.forEach((child) => child.remove());

	// [...itemList.children].forEach((child) => child.remove()) --> one line
});

//QUESTION ( ask about event delegation, set event listener on row on each element? If in each element then do it on the creation? )
