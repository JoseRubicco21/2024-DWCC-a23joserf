'use-strict';

const submit = document.querySelector('[type=submit]');
const textInput = document.querySelector('[type=text]');

function createLi() {
	const listItem = document.createElement('li');
	listItem.append(textInput.value);
	document.body.append(listItem);
}

submit.addEventListener('click', (ev) => {
	ev.preventDefault();
	createLi();
});
