//1. Imaxinar que se recolle a seguinte información relativa a un xogo dun servidor web:
const players = [
	[
		'Neuer',
		'Pavard',
		'Martinez',
		'Alaba',
		'Davies',
		'Kimmich',
		'Goretzka',
		'Coman',
		'Muller',
		'Gnarby',
		'Lewandowski',
	],
	[
		'Burki',
		'Schulz',
		'Hummels',
		'Akanji',
		'Hakimi',
		'Weigl',
		'Witsel',
		'Hazard',
		'Brandt',
		'Sancho',
		'Gotze',
	],
];
//
/*
Utilizando o contido aprendido sobre arrays, proporciona unha única sentencia
JavaScript para cada unha das seguintes instrucións:

a. Crea as variables players1, players2 que conteñan un array cos xogadores
de cada equipo. Así, players1 terá os xogadores do primeiro equipo e
players2 os do segundo equipo.

*/
const [players1, players2] = [...players];
console.log(players1, players2);

/*

b. O primeiro xogador do array é o porteiro e o resto son xogadores de campo.
Crea unha variable chamada gk que conteña o porteiro do primeiro equipo e
unha variable de tipo array chamada fieldPlayers que conteña o resto de
xogadores do equipo.
*/

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

/*
c. Crea un array allPlayers que conteña os xogadores dos dous equipos.
*/

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

/*
d. O primeiro equipo substituíu os xogadores iniciais por 'Thiago', 'Coutinho',
'Periscic'. Crea unha nova variable de tipo array chamada players1Final que
conteña todos os xogadores: os iniciais e tamén os 3 novos.
*/

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];
console.log(players1Final);

/*
2. Dado un array con nomes de variables formados por dúas palabras separadas por
“_”, fai as operacións necesarias para mostrar por consola os nomes das variables
en formato camelCase. Por exemplo, se o array de entrada é [“first_name”, “
last_NAME”], deberase mostrar por consola “firtsName” e “lastName”.
14
*/

function toCamelCaseDestruct(string, separator) {
	const [part1, part2] = string.split(separator);
	return (
		part1.toLowerCase() +
		part2.charAt(0).toUpperCase() +
		part2.toLowerCase().slice(1)
	);
}

function ArrayToCamelCaseDestruct(array, separator) {
	let result = [];
	for (item of array) {
		result.push(toCamelCaseDestruct(item, separator));
	}
	return result;
}

function toCamelCase(string, separator) {
	let newStrArray = string.split(separator);
	newStrArray[1] =
		newStrArray[1].charAt(0).toUpperCase().toLowerCase() +
		newStrArray[1].substring(1, newStrArray[1].length);
	return newStrArray.join('');
}

function ArrayToCamelCase(array, separator) {
	let newArray = [];
	for (let item of array) {
		newArray.push(toCamelCase(item, separator));
	}
	return newArray;
}

let testArray = ['first_name', 'last_NAME'];

let newTestArray = ArrayToCamelCase(testArray, '_');
let newTestArrayDestruct = ArrayToCamelCaseDestruct(testArray, '_');
//console.log(newTestArray);
console.log(newTestArrayDestruct);

/**
 * Generalized way for n number of separators
 *
 */
// makes n number of separators to camel case,
function nToCamelCase(string, separator) {
	let splittedString = string.split(separator);
	let transformedString = [];
	for (word of splittedString) {
		transformedString.push(capitalizeFirstLetter(word));
	}
	// Quick dirty fix. It's more simple than adding complexity to the loop. Not sure if it is best like this or the other way around.
	transformedString[0] = transformedString[0].toLowerCase();
	return transformedString.join('');
}

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function ArrayToNCamelCase(array, separator) {
	let result = [];
	for (item of array) {
		result.push(nToCamelCase(item, separator));
	}
	return result;
}

let testArrayGeneralized = [
	'first_name_and_some_more',
	'last_NAME',
	'Other_things_are_very_important_too',
];

let resultArray = ArrayToNCamelCase(testArrayGeneralized, '_');
console.log(resultArray);

const flightsInfo =
	'_Delayed_Departure;scq93766109;bio2133758440;11:25+_Arrival;bio0943384722;scq93766109;11:45+_Delayed_Arrival;svq7439299980;scq93766109;12:05+_Departure;scq93766109;svq2323639855;12:30';

function getFlightInfo(string) {
	const [departure, city, city2, time] = string.split(';');
	let result = `${departure
		.replaceAll('_', ' ')
		.slice(0, departure.length)} ${city.slice(0, 3).toUpperCase()} ${city2
		.slice(0, 3)
		.toUpperCase()} (${time.replace(':', 'h')})`;
	return result;
}

function getFlightsInfo(string) {
	let flights = string.split('+');

	let max = Math.max(...flights.map((map) => map.length));

	for (const flight of flights) {
		console.log(getFlightInfo(flight).padStart(max, ' '));
	}
}

getFlightsInfo(flightsInfo);

let canyoudothis = {
	a: {
		b: 2,
	},
};

console.log(canyoudothis['a']?.['c']?.['f']?.['k']);

let x = function () {
	console.log();
};
