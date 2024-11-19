'use-strict';
/*
Engade os seguintes eventos:
● Cando o cursor do rato entre e saia do botón, mostra unha mensaxe por
consola indicándoo.
● Ao pulsar o botón debe desaparecer o div con id=texto.
● Cando se escriba algo na caixa de texto, debe mostrarse información da
tecla pulsada no div e tamén o código da tecla pulsada. Ademais, se o div
estaba oculto, debe mostrarse.
*/

const btn = document.querySelector('button');
const textDiv = document.querySelector('#texto');
const textInput = document.querySelector('input');

btn.addEventListener('mouseenter', () => {
	console.log('Entrando en el boton');
});

btn.addEventListener('mouseout', () => {
	console.log('saliendo del boton');
});

btn.addEventListener('click', (ev) => {
	if (textDiv.innerHTML.length != 0) {
		textDiv.classList.toggle('hidden');
	}
});

textInput.addEventListener('keydown', (ev) => {
	textDiv.classList.remove('hidden');
	textDiv.innerText = `Key pressed : ${ev.key} | Key Code : ${ev.code}`;
});
