const persoas = [
	{ nome: 'aaron', idade: 65, id: 1 },
	{ nome: 'beth', idade: 2, id: 2 },
	{ nome: 'ánxeles', idade: 13, id: 3 },
	{ nome: 'daniel', idade: 3, id: 4 },
	{ nome: 'ada', idade: 25, id: 5 },
	{ nome: 'erea', idade: 1, id: 6 },
	{ nome: 'navia', idade: 43, id: 7 },
];

/*
a. Crea un novo array que conteña só as persoas maiores de idade.

b. Crea un novo array que conteña os nomes (só os nomes) de todas as
persoas.

c. Crea un novo array que conteña, en maiúsculas, os nomes das persoas
maiores de idade.

d. Crea un novo array que conteña obxectos só co id e o nome das persoas.
*/

const mayores = persoas.filter(({ idade }) => idade >= 18);
console.log(mayores);

const names = persoas.map((persona) => persona.nome);
console.log(names);

const capitalizedNames = persoas
	.filter(({ idade }) => idade >= 18)
	.map((persona) => persona.nome.toUpperCase());

/*
const capitalizedNames = persoas
	.filter(({ idade }) => idade >= 18)
	.map({nome} => nome.toUpperCase());
*/
console.log(capitalizedNames);

const onlyIdAndName = persoas.map(({ nome, id }) => ({ nome: nome, id: id }));

// const DONTDOTHIS = [...persoas].forEach(({ idade }) => delete idade);

//console.log(DONTDOTHIS);

console.log(onlyIdAndName);

/*
2. Dado un array cos días da semana en minúsculas:
a. Obtén un novo array cos días que empecen por “m” e móstrao por consola.
b. Mostra unha mensaxe indicando se algún día comeza por ‘s’.
c. Mostra unha mensaxe indicando se todos os días acaban en ‘s’.
d. Mostra por consola o primeiro día que empece por “m”.
e. Mostra por consola a posición no array do primeiro día que empeza por “m”.
f. Crea un novo array cos días da semana en maiúsculas
*/

const days = [
	'lunes',
	'martes',
	'miercoles',
	'jueves',
	'viernes',
	'sabado',
	'domingo',
];

const dayStartingWithM = days.filter((day) => day.startsWith('m'));
console.log(dayStartingWithM);

const dayStartsWiths = days.some((day) => day.startsWith('s'))
	? 'Hay por lo menos 1 dia que comienza con la s'
	: 'Ningún dia comienza por s';
console.log(dayStartsWiths);

const everyDayEndsWithS = days.every((day) => day.endsWith('s'))
	? 'Todos los dias terminan en s'
	: 'No todos los dias terminan en S';
console.log(everyDayEndsWithS);
const notas = [4, 8, 3, 10, 5];

const getFirstDayStartingWithM = days.find((day) => day.startsWith('m'));
console.log(getFirstDayStartingWithM);

const getIndexOfFirstDayStartingWithM = days.findIndex((day) =>
	day.startsWith('m')
);
console.log(getIndexOfFirstDayStartingWithM);

const mayusDay = days.map((day) => day.toUpperCase());
console.log(mayusDay);

/**
 * 
 * 3. Fai unha función que ordene as notas dun array pasado como parámetro. Por
exemplo, se se pasa o array [4,8,3,10,5] debe devolver [3,4,5,8,10]. Debes utilizar a
función sort e pasarlle como parámetro unha función que ti definas que serva para
realizar a comparación de elementos
 * const notas = [4, 8, 3, 10, 5];
 */

// Only valid with numbers
const sortedNotas = notas.sort((nota, nextNota) => nota - nextNota);
console.table(sortedNotas);

/**
 *4.- Dado un array de números, obtén o valor máis alto. (Usa algunha das funcións para
traballar con arrays)
 */

const nums = [4, 8, 3, 10, 5];
const maxOfArray = nums.reduce((initial, next) =>
	initial > next ? initial : next
);
console.table(maxOfArray);

const inventors = [
	{ first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
	{ first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
	{ first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
	{ first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
	{ first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
	{ first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
	{ first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
	{ first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
	{ first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
	{ first: 'Sarah', last: 'Goode', year: 1855, passed: 1905 },
	{ first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
	{ first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
];

/**
 * 
 *a Filtra o array de inventores e crea un array só cos inventores que naceron no
século XVI.
b. Crea un array co nome completo dos inventores: ["Albert Einstein", "Isaac
Newton", ...]
c. Unha vez obtido o array co nome completo dos inventores do exercicio
anterior, ordénao alfabeticamente polo apelido.
d. Ordena alfabeticamente polo apelido o array de obxectos inventores inicial.
e. Ordena o array de inventores pola data de nacemento.
f. Calcula a suma dos anos que viviron todos os inventores.
g. Ordena os inventores polos anos que viviron, primeiro o máis lonxevo
 */

const invetorsBornInXVI = inventors.filter(
	({ year }) => year >= 1500 && year < 1600
);
console.table(invetorsBornInXVI);

const fullNamesOfInventors = inventors
	.map(({ first, last }) => `${first} ${last}`)
	.sort((prev, next) =>
		prev.split(' ')[1].charAt(0) > next.split(' ')[1].charAt(0) ? 1 : -1
	);

console.table(fullNamesOfInventors);

const inventorsSortedBySurname = inventors.sort(
	({ last }, { last: nextLast }) =>
		last.charAt(0) > nextLast.charAt(0) ? 1 : -1
);

console.table(inventorsSortedBySurname);

const sortedByBirthDate = inventors.sort(
	({ year }, { year: nextYear }) => year - nextYear
);
console.table(sortedByBirthDate);

const getAge = (death, birth) => death - birth;

const sortedByLongevity = inventors.sort(
	(inventor, nextInventor) =>
		getAge(nextInventor.passed, nextInventor.year) -
		getAge(inventor.passed, inventor.year)
);
console.table(sortedByLongevity);

const sumOfAllAges = inventors
	.map(({ year, passed }) => getAge(passed, year))
	.reduce((a, b) => a + b);
console.log(sumOfAllAges);
/**
Dada a seguinte información, obtén un obxecto con unha propiedade para cada
medio de transporte, indicando o número de veces que se repite no array. É dicir, o
resultado debería ser {car: 5, truck: 3, bike: 2, walk: 2, van: 2, pogostick: 1}. Intentar
facer o exercicio usando o método reduce
*/
const data = [
	'car',
	'car',
	'truck',
	'truck',
	'bike',
	'walk',
	'car',
	'van',
	'bike',
	'walk',
	'car',
	'van',
	'car',
	'truck',
	'pogostick',
];

const reducedData = {};

const getTransportationMethod = data.reduce((initialValue, nextValue) => {
	reducedData[nextValue] = reducedData[nextValue]
		? (reducedData[nextValue] += 1)
		: (reducedData[nextValue] = 1);
}, {});

console.log(reducedData);
