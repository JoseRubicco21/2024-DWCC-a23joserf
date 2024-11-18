/*
2. Descarga o código fonte 03-propiedadesNodo02.html e mostra por consola:
● O número de ligazóns da páxina.
● A dirección da penúltima ligazón.
● O número de ligazóns que apuntan a http://proba
● O número de ligazóns do terceiro parágrafo.
● Modifica o estilo das ligazóns que apuntan a http://proba para que teñan o
texto de cor laranxa.*/

// 1
const numbersOfLinks = document.getElementsByTagName('a').length;
console.log(numbersOfLinks);

// 2
const beforeLastLink = Array.from(document.getElementsByTagName('a'))[
	numbersOfLinks - 2
].getAttribute('href'); // Retrieves N num of links starting from 1. Arrays are indexed at 0, so -1, to get the before last, -1. So -2.

console.log(beforeLastLink);

// 3
const linksPointingToAdress = Array.from(
	document.getElementsByTagName('a')
).filter((element) => element.getAttribute('href') === 'http://proba').length;
console.log(linksPointingToAdress);

// 4

const numberOfLinksInThirdParagraph = [
	...[...document.getElementsByTagName('p')[2].getElementsByTagName('a')],
].length;

const simpler = document
	.querySelectorAll('p')[2]
	.getElementsByTagName('a').length;

console.log(numberOfLinksInThirdParagraph);

// 5

const linkElementsPointingToAdress = [...document.getElementsByTagName('a')]
	.filter((link) => link.getAttribute('href') === 'http://proba')
	.forEach((link) => link.setAttribute('style', 'color: orange;'));
