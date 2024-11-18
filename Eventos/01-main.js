'use-strict';

const link = document.querySelector('#ligazon');
const extra = document.querySelector('#adicional');

console.log(link, extra);

function makeHidden() {
	extra.classList.toggle('oculto');
	link.classList.toggle('oculto');
}

link.addEventListener('click', makeHidden);
