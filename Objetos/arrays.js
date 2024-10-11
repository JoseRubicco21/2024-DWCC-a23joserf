// 1. Crea unha función que reciba un elemento e un array como parámetros. A función
// debe devolver un novo array que conteña os índices onde aparece ese elemento no
// array.

function getIndicesOfRepeatingObjectInArray(element, array) {
	const indexes = [];
	for (let [index, elem] of array.entries()) {
		if (elem === element) indexes.push(index);
	}
	return indexes;
}

let test = [
	'Bob',
	'Ana',
	'Miguel',
	'Bob',
	'Sara',
	'Sergio',
	'Bob',
	'Raquel',
	'Ricardo',
	'Bob',
	'Jose',
];
console.log(getIndicesOfRepeatingObjectInArray('Bob', test));

/*
Exemplo:
const numeros = [1, 3, 5, 1, 4, 1, 6, 8, 10, 1];
function indices(elemento, arrayElementos) {
…
}
console.log(indices(1, numeros)); // (4) [0, 3, 5, 9]
10
Obxectos
*/

/*
2. Dado o array froitas (const froitas = ['peras', 'mazás', 'kiwis', 'plátanos',
'mandarinas'];) , fai os seguintes apartados co método splice:
a. Elimina as mazás.
b. Engade laranxas e sandía detrás dos plátanos,.
c. Quita os kiwis e pon no seu lugar cereixas e nésperas.
Despois de realizar cada operación mostra por pantalla a lista de froitas do array
separadas por unha coma e un espazo. Por exemplo, inicialmente o array debe
mostrarse como “peras, mazás, kiwis, plátanos, mandarinas”.
*/

// Note, splicing and joining result in a flattened str of every array element.
// The actual representation of this would be item1, item2 (Array), item3 (Array) and so on.
// The third parameter is not an array but a subsequent N params like varargs. So one
// can think of it as a destructured array.

const separator = ', ';
const froitas = ['peras', 'mazás', 'kiwis', 'plátanos', 'mandarinas'];
console.log(froitas.join(separator));

// a. Elimina as mazás.
froitas.splice(1, 1);
console.log(froitas.join(separator));

// b. Engade laranxas e sandía detrás dos plátanos,.
froitas.splice(3, 0, 'laranxas', 'sandias');
console.log(froitas.join(separator));

// c. Quita os kiwis e pon no seu lugar cereixas e nésperas.
froitas.splice(1, 1, 'cerixas', 'nésperas');
console.log(froitas.join(separator));

console.log(froitas);

/*
3. Crea unha función á que se lle pase unha frase con varias palabras e devolva a
mesma frase coa primeira letra de cada palabra en maiúsculas e o resto de letras en
minúsculas.
*/

function capitalize(phrase) {
	splittedPhrase = phrase.split(' ');
	console.log(splittedPhrase);
	let newPhrase = [];

	for (word of splittedPhrase) {
		const capitalizedWord = word
			.charAt(0)
			.toUpperCase()
			.concat(word.slice(1, word.length));

		newPhrase.push(capitalizedWord);
	}

	return newPhrase.join(' ');
}

console.log(
	`Capitalized phrase ${capitalize(
		'the quick brown fox jumped over the lazy dog'
	)}`
);
