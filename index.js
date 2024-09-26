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
