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
let storedItems = [];
let editItem = '';

// Function definitions:
// - When creating elements or anything to do with Loading / Saving I prefer to use classical function definitions.
// - When operating over data I prefer functional expressions.

// Utility function used to add n class to the classList prop of an element. Interfaces is supposed to be a varargs of
// classes to add.
//TODO Throws an exception if element param is not an HTMLElement.
//TODO Throws an exception if any value in cssClasses is not a str.

function saveLocalStorage() {
	localStorage.setItem('storedItems', JSON.stringify(storedItems));
}

function loadLocalStorage() {
	if (localStorage.getItem('storedItems'))
		storedItems = JSON.parse(localStorage.getItem('storedItems'));
}

// This only works for the delete button. Not exactly
const findIndexInStoreForDeletetion = (array, ev) =>
	array.indexOf(
		array.find((element) => ev.target.closest('div').children[0].innerText)
	);

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
	// Replace every space  character that appears 1 or more time for a single space.
	htmlClassString = htmlClassString.replace(/\s+/g, ' ');
	// Split the tokens by spaces
	const cssClasses = htmlClassString.split(' ');
	// Add the classes
	cssClasses.forEach((cssClass) => element.classList.add(cssClass));
}

function setElementToDisableIfValueIsEmpty(element, value) {
	// If the value of the input is empty, we disable the element we pass.
	return value === '' || value == undefined || value.length === 0
		? (element.disabled = true)
		: (element.disabled = false);
}

function makeFilterAndDeleteAllHidden() {
	if (storedItems.length == 0) {
		filterItemsInput.classList.add('hidden');
		deleteAllButton.classList.add('hidden');
	} else {
		filterItemsInput.classList.remove('hidden');
		deleteAllButton.classList.remove('hidden');
	}
}
function toggleAddButtonToEditButton(element) {
	const buttonText = element.children[1];

	if (element.getAttribute('state') == 'adding') {
		// If it's on adding we toggle it to editing, as it changing state to represent editing.
		element.setAttribute('state', 'editing');
		// We remove and add the classes to change from dark -> green
		element.classList.remove('btn-dark');
		element.classList.add('btn-success');
		buttonText.innerText = 'Editar elemento';
	} else {
		// Else we toggle it to adding since it should always start at adding items.
		element.setAttribute('state', 'adding');
		// We remove and add the classes to change from green -> dark
		element.classList.remove('btn-success');
		element.classList.add('btn-dark');
		buttonText.innerText = 'Engadir elemento';
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
	closeButton.setAttribute('data-bs-toggle', 'modal');
	closeButton.setAttribute('data-bs-target', '#delete-modal');
	closeButton.setAttribute('type', 'button');
	// Build the structure of the item
	textValue.append(value);
	item.append(textValue);
	item.append(closeButton);

	return item;
}
/*
// Modal create confirmation modal :
function createModal(id, title, content){
	
	// It would make sense to create an Event listener for the lifcycle of thsi modal.
	// then it gets remo

	const modalBase = document.createElement("div")
	addClassesToElement(modalBase, "modal", "fade")
	modalBase.setAttribute("id", id)
	
	const modalDialog = document.createElement('div')
	addClassesToElement(modalDialog, 'modal-dialog')

	const modalContent = document.createElement('div');
	addClassesToElement(modalContent, "modal-content")

	const modalHeader = document.createElement('div')
	addClassesToElement(modalHeader, "modal-header")

	const modalTitle = document.createElement('h1')
	addClassesToElement(modalTitle, "modal-title", "fs-5")
	modalTitle.innerText = title

	const modalXButton = document.createElement('button')
	addClassesToElement(modalXButton, "btn-close")
	modalXButton.setAttribute("type", "button")
	modalXButton.setAttribute("data-bs-dismiss", "button")
	modalXButton.setAttribute("aria-label", "Close")

	modalHeader.append(modalTitle)
	modalHeader.append(modalXButton)

	const modalBody = document.createElement('div')
	addClassesToElement(modalBody, "modal-body")
	modalBody.innerText = content

	const modalFooter = document.createElement('div')
	addClassesToElement(modalFooter, "modal-footer")
	
	const modalCloseButton = document.createElement('button')
	addClassesToElement(modalCloseButton, "btn", "btn-dark")
	modalCloseButton.setAttribute("type", "button")
	modalCloseButton.setAttribute("data-bs-dismiss", "modal")
	modalCloseButton.innerText = "Close"

	const modalConfirmDeletionButton = document.createElement('button')
	addClassesToElement(modalConfirmDeletionButton, "btn", "btn-danger")
	modalConfirmDeletionButton.setAttribute("type", "button")
	modalConfirmDeletionButton.setAttribute("data-bs-dismiss", "modal")
	modalConfirmDeletionButton.innerText = "Delete item"

	modalFooter.append(modalCloseButton);
	modalFooter.append(modalConfirmDeletionButton)

	modalBase.append(modalDialog)
	modalDialog.append(modalContent)
	modalContent.append(modalHeader)
	modalContent.append(modalBody)
	modalContent.append(modalFooter)

	modalBase.addEventListener('click', (event) => {
		if(event.target.tagName == 'BUTTON'){
			if(event.target.classList.contains("btn-danger")){
				deleting = true
			} else {
				deleting = false
			}
		}
	})

	document.body.append(modalBase)
}
*/

function addItemToList(event) {
	if (!storedItems.includes(addItemsInput.value)) {
		const newElementOfList = createItemOfList(addItemsInput.value);
		itemList.append(newElementOfList);
		storedItems.push(addItemsInput.value);
		// We set the value to empty then we disable to give the feel of submission.
		addItemsInput.value = ''; // --> "Deletes" the value from the input.
		setElementToDisableIfValueIsEmpty(addItemsButton, event.target.value); // --> sets the button to disabled because the value of the input is "".
		saveLocalStorage();
	} else {
		window.alert('The item already exists');
	}
}

function editItemInList(event) {
	const indexOfItemToEdit = storedItems.indexOf(
		storedItems.find((str) => str == editItem.children[0].innerText)
	);
	storedItems[indexOfItemToEdit] = addItemsInput.value;
	editItem.children[0].innerText = addItemsInput.value;
	toggleAddButtonToEditButton(addItemsButton);
	addItemsInput.value = '';
	setElementToDisableIfValueIsEmpty(addItemsButton, event.target.value);
	saveLocalStorage();
}

function filterItemList(event) {
	// This implements Fuzzy search, somehow. I stumbled upon the functionality trying to fix a bug lol.
	let filteredItems = [
		...storedItems.filter((str) => str.includes(event.target.value)),
	];
	if (filteredItems.length != 0) {
		[...itemList.children].forEach((el) => el.remove());
		filteredItems.forEach((value) => itemList.append(createItemOfList(value)));
	}
}

// Event Listeners
document.addEventListener('DOMContentLoaded', (event) => {
	loadLocalStorage();
	if (storedItems != undefined) {
		storedItems.forEach((item) => itemList.append(createItemOfList(item)));
		makeFilterAndDeleteAllHidden();
	}
});
// Item input. The text item. If the input is empty we want the element we pass disabled,
addItemsInput.addEventListener('input', (event) => {
	setElementToDisableIfValueIsEmpty(addItemsButton, event.target.value);
});

filterItemsInput.addEventListener('input', (event) => {
	filterItemList(event);
});
//TODO change the listener to have the strategy patern based on a stateVariable.
// We want to create the element of List and append it when it's submitted. This is on the button element.

// We want to define two methods since we have a button that can do 2 two things.
// - Add an item.
// - Edit an item.
// To do this we will be using a custom attribute "data-editing"
addItemsButton.addEventListener('click', (event) => {
	switch (addItemsButton.getAttribute('state')) {
		case 'adding':
			addItemToList(event);
			makeFilterAndDeleteAllHidden();
			break;
		case 'editing':
			editItemInList(event);
			break;
		// The default would be the same as editing. Since we only have 2 states, we could delete the "editing" case.
		default:
			break;
	}
});

// We want to add one event Listner for every single element we create. Doing it onto the element is feasable.
// Though this has a drawback it creates n event listeneres where n is equal to the number of list elements.
// using propagation we can circunvent this and make it more optimal.

itemList.addEventListener('click', (event) => {
	// If the event target is a "Buttton" then we delete the closest div, in this case itself.
	// createModal("delete-modal", "Confirm Deletion", `Are you sure you want to delete the item ${event.target.closest('div').children[0].innerText ?? ""}`)
	// const modal  =document.getElementById('delete-modal')
	// const bsModal = new bootstrap.Modal(modal);

	if (event.target.tagName == 'BUTTON') {
		if (window.confirm('Are you sure you want to delete the item?')) {
			event.target.closest('div').remove();
			const itemToRemove = findIndexInStoreForDeletetion(storedItems, event);
			storedItems.splice(itemToRemove, 1);
			saveLocalStorage();
			makeFilterAndDeleteAllHidden();
		}
	}

	if (
		event.target.classList.contains('alert') ||
		event.target.tagName == 'STRONG'
	) {
		toggleAddButtonToEditButton(addItemsButton);
		editItem = event.target;
	}
});

// We're going to be using the same technique to edit

deleteAllButton.addEventListener('click', () => {
	// Get the array of items in the children list.
	const items = Array.from(itemList.children);
	// For each child, remove it from the DOM.
	items.forEach((child) => child.remove());
	storedItems = [];
	saveLocalStorage();
	makeFilterAndDeleteAllHidden();
	// [...itemList.children].forEach((child) => child.remove()) --> one line
});

//QUESTION ( ask about event delegation, set event listener on row on each element? If in each element then do it on the creation? )
//ANSWER
/**
 * Propagation always happens. So it's better to use of it and set the listener on the parent element and check if the item one is clicking.
 * At the same time, it's not recommended to add event listeners to each new elemenet you create.
 * Removing and adding event listeners to change them is not recommended as it makes the flow of the program unpredictable and one can loose track
 * of what event listeners one has attached to an element.
 */
