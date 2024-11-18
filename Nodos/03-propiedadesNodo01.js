'use-strict';
/*
Descarga o código fonte 03-propiedadesNodo01.html e indica, polo menos, unha
forma de acceder ao seguinte contido e mostralo por consola:
● O innerHTML, innerText e textContent da etiqueta “Escolle sexo”:
● O valor do primeiro input de sexo
● O valor do sexo que estea seleccionado.
● O texto de cada un dos elementos <li>
● Indica cantos elementos <li> hai.
● Indica o valor do atributo data-widget-name
*/

// Label Escolle sexo
const form = document.querySelector('form');
const escolleSexoElement = form.lastElementChild.previousElementSibling;

console.log(escolleSexoElement.innerHTML);
console.log(escolleSexoElement.innerText);
console.log(escolleSexoElement.textContent);

// First input

const firstInputOfEscolleSexo =
	escolleSexoElement.firstElementChild.nextElementSibling;
console.log(firstInputOfEscolleSexo.getAttribute('value')); // In the docs it's says getAttribute is a memory performant way of accessing attributes.

// Checked input
const [checkedInputOfEscolleSexo] = Array.from(escolleSexoElement.children)
	.filter((element) => element.nodeName === 'INPUT')
	.filter((element) => element.hasAttribute('checked'));
console.log(checkedInputOfEscolleSexo);

/* Sergio's magic mans way: */

const [checkedInputOfEscolleSexoWithFind] = Array.from(
	escolleSexoElement
		.getElementsByTagName('input')
		.find((value) => value.checked)
);

/* Query selector way */

const checkedInputOfEscolleSexoWithQuerySelector =
	escolleSexoElement.querySelector('input:checked').value;

// Get text of each LI item in first UL.
const listElement = document.querySelector('ul');
const listItemsElements = Array.from(listElement.children)
	.filter((element) => element.nodeName === 'LI')
	.forEach((element) => console.log(element.innerText));

// Get number of LIs in first UL

const numberOfLisInUl = listElement.childElementCount;

console.log(numberOfLisInUl);
console.log(listElement.length);
//

const valueOfdataWidgetName = document
	.querySelector('[data-widget-name]')
	.getAttribute('data-widget-name');
console.log(valueOfdataWidgetName);
