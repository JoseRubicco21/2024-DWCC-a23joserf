//'use strict';
/*
// Function definition

function add(a, b) {
	return a + b;
}

// Function expression

const addExpression = function (a, b) {
	return a + b;
};

// Arrow fucntion

const addArrow = (a, b) => {
	return a + b;
};

// Arrow without return, is implicit.
const addArrowNoReturn = (a, b) => a + b;

// const mult = (a, b) => a * b;

const returnObject = (param1, param2) => ({ modulo: param1, horas: param2 });

console.log(returnObject('DWCC', 200));

// Arrow functions cannot use `this` keyword.

// IIFE, self-invoking function. Invoked right after definition. I have used it for loading first certain things in my obsidian plugins.
// Ideal for loading settings.

(function () {
	console.log('hey');
})();

*/

/*
1. Crea unha función frecha que devolva o cubo dun número pasado como parámetro.
*/

const cube = (number) => number ** 3;
console.log(cube(3));
/*

2. Crea unha función frecha á que se lle pase un array e devolva como resultado un
array cos elementos impares do array de entrada.
const arrayEntrada = [10, 2, 3, 5, 7, 8, 23, 50];
…
console.log(numerosImpares(arrayEntrada)); // (4) [3, 5, 7, 23]

*/

const filterEven = (array) => array.filter((number) => number % 2 != 0);
console.log(filterEven([10, 2, 3, 5, 7, 8, 23, 50]));
/*
3. Crea unha función frecha que sume todos os valores pasados como parámetros,
sendo estes un número indeterminado.
*/
// Supossing only numbers, Otherwise use ... to concatenate.
const reduceSum = (array) => array.reduce((a, b) => a + b, 0);
console.log(reduceSum([1, 2, 3, 4, 5, 6, 7]));

/*
4. Crea unha función á que se lle pasen varios números como parámetros (un número
indeterminado de parámetros) e que devolva a media deses números.
*/

const avgTotal = ([...nums]) => nums.reduce((a, b) => a + b) / nums.length;
console.log(avgTotal([2, 1]));

/*
/*
5. Crea unha función frecha chamada minMax() que reciba como parámetro un array
de números e devolva un obxecto co valor mínimo e máximo do array de entrada:
console.log(minMax([1, 2, 3, 4, 5])); // Debe devolver { min: 1, max: 5 }
*/

const minMax = (array) => ({
	min: Math.min(...array),
	max: Math.max(...array),
});

console.log(minMax([1, 2, 3]));
/*
6. Crea unha función autoinvocada á que se lle pase a lonxitude e ancho dun
rectángulo. A función debe mostrar por consola unha mensaxe indicando o valor da
área do rectángulo.
*/

(function (length, width) {
	console.log(length * width);
})(10, 20);

/*
7. Crea unha función á que se lle pase un DNI (ex: 12345678w ou 87654321T) e
devolva se é correcto ou non.
*/
// This kind of works, if you want to check actual validity you could but it needs a bit more of code.
// Actually do the validation :(
const dniLetters = [
	'T',
	'R',
	'W',
	'A',
	'G',
	'M',
	'Y',
	'F',
	'P',
	'D',
	'X',
	'B',
	'N',
	'J',
	'Z',
	'S',
	'Q',
	'V',
	'H',
	'L',
	'C',
	'K',
	'E',
];
const isDNIcorrect = (dni) =>
	dni.match(/^\d{8}[A-Z]$/gi) != null // Match gi returns an Array  all of occurences with the RegExp of 8 digits and a A-Z letter.
		? ((
				dni // IIFE invonked  that has a dni passed.
		  ) =>
				dni.substring(8, 9).toLowerCase() === // Substring the letter and lower cases it.
				dniLetters[+dni.substring(0, 8) % 23].toLowerCase())(dni) // gets the index of dniLetters at a converted "str" of the 8 digits and gets the rest of 23 and lowerCases it passing the dni as param
		: false; // ternary to return true or false.

console.log(isDNIcorrect('54654398G'));

/*
8. Crea unha función que reciba como parámetro unha cantidade enteira e faga o
desglose do número de billetes e moedas necesarios para obtela. Debe usarse o
número mínimo de billetes e moedas.
*/

// Let's suppose that you have 15 -->
// The best case scenario is 10 + 5.  soooo.... while n > 0 if %
// The
const getCoinsAndCash = (money) => {
	const moneyValues = [500, 200, 100, 50, 20, 10, 5, 2, 1];

	const total = new Map();

	for (const moneyValue of moneyValues) {
		if (money >= moneyValue)
			total.set(moneyValue, Math.floor(money / moneyValue));
		money %= moneyValue;
	}

	return total;
}; // Nah i'm not doing this. Not today.

console.log(getCoinsAndCash(250));

/*
9. Crea unha función chamada buscarPatron(texto, patron) que reciba como
parámetros un texto e un patrón. A función debe devolver como resultado o número
de veces que aparece o patrón no texto, tendo en conta que un carácter pode formar
parte de máis dun patrón encontrado.

Debe implementarse a función de forma manual sen utilizar as funcións proporcionadas pola linguaxe JavaScript para buscar en cadeas.
Non se deben distinguir maiúsculas de minúsculas.
Exemplo: buscarPatron(“000111101000ABCHA”, “00”) debe devolver 4.

*/

// This gets an array of n elements splitted by the pattern. If there's a match returns '' plus other splits. Limit to

const buscarPatron = (texto, patron) =>
	[...texto] // Destruct the array in pairs.
		.map((_, index) => texto.substring(index, [index + patron.length])) // Map each val, to a substr
		.filter((value) => value.includes(patron)).length;

console.log(buscarPatron('000111101000ABCHA', '00'));

/*
10. Crea unha función JavaScript que comprobe se é posible axendar unha reunión
dentro do horario laboral.

A estrutura da función e do programa proporciónanse a continuación. O seguinte
código inclúe comprobacións con assert, que mostrarán por padni.substring(8, 9).toLowerCase() === // Substring the letter and lower cases it.
				dniLetters[+dni.substring(0, 8) % 23].toLowerCase()ntalla unha mensaxe
en caso de que a aserción sexa falsa. É dicir, se a comprobación é correcta, o
programa non mostrará ningunha mensaxe:

*/

const inicioXornada = '07:30';
const finalXornada = '17:45';

// 10 : 30 vs 11 : 15
// 630 vs 705

function axendarReunion(horaInicioReunion, duracionEnMinutos) {
	/*
	horaInicioReunion
		.split(':')
		.reduce((horas, minutos) => +horas * 60 + +minutos) +
		duracionEnMinutos >
	finalXornada.split(':').reduce((horas, minutos) => +horas * 60 + minutos)
		? false
		: horaInicioReunion
				.split(':')
				.reduce((horas, minutos) => +horas * 60 + +minutos) <
		  horaInicioReunion
				.split(':')
				.reduce((horas, minutos) => +horas * 60 + +minutos)
		? false
		: true; // Transforms hora inicio into number,
*/
	const convert = (time) =>
		time.split(':').reduce((horas, minutos) => +horas * 60 + +minutos);

	return (
		!(convert(horaInicioReunion) + duracionEnMinutos > convert(finalXornada)) &&
		!(convert(horaInicioReunion) < convert(inicioXornada))
	);
}
// Comprobacións
console.assert(
	axendarReunion('7:00', 15) == false,
	'Fallo comprobando axendarReunión("7:00", 15) == false'
);
console.assert(
	axendarReunion('7:15', 30) == false,
	'Fallo comprobando axendarReunión("7:15", 30) == false'
);
console.assert(
	axendarReunion('7:30', 30) == true,
	'Fallo comprobando axendarReunión("7:30", 30) == true'
);
console.assert(
	axendarReunion('11:30', 60) == true,
	'Fallo comprobando axendarReunion("11:30", 60) == true'
);
console.assert(
	axendarReunion('17:00', 45) == true,
	'Fallo comprobando axendarReunion("17:00", 45) == true'
);
console.assert(
	axendarReunion('17:30', 30) == false,
	'Fallo comprobando axendarReunion("17:30", 30) == false'
);

/*
Funcións
11. Crea unha función que reciba un array bidimensional de lonxitude variable que se
corresponda cun escenario do xogo de Buscaminas. Este array almacenará un -1
nas posicións onde hai minas e un 0 en caso contrario. A función debe devolver un
array bidimensional onde cada posición que non teña mina, debe ter a información
do número de minas adxacentes (diagonal, horizontal e vertical).
Exemplo:
arrayEntrada = [[0, 0, -1, 0],
[0, -1, -1, 0]];
arraySaida = [[1, 3, -1, 2],
[1, -1, -1, 2]]


/ [[0,0][0,-1]] goes in.*/

// What about using a custom DS consisting of :
/*

Node {
	value : 0
	neighbours : [ nodes ]
}

Board [
	     col, col, col
	row[   0, 	0, 	 0 ]
	row[   0, 	0,   0 ]
	row[   0, 	0,   0 ]
	row[   0, 	0,   0 ]
	row[   0, 	0,   0 ]

]

This DS let's one implement the "Spread" animation quite easily?? is it faster though? "
*/

class Node {
	constructor(isMine, state, neighbours) {
		this.isMine = isMine;
		this.state = state;
		this.neighbours = [];
	}
}

class Board {
	constructor(width, height) {
		this.width = width;
		this.height = height;
	}

	createBoard() {
		const board = document.createElement('div');
		for (const i = this.height; i < this.height; i--) {
			const row = document.createElement('div');

			for (const i = this.width; i < this.width; i--) {
				const col = document.createElement('div');
				row.appendChild(col);
			}
		}
	}
}

class Game {
	constructor(gameState) {
		this.gameState = State;
	}
}

/**
 *
 * @param {[[]]} board
 */

const mineSweeperSolver = (board) => {
	const resultBoard = [];
	//const rowValues = board.length;
	//const colValues = board[0].length;
	// creating a row

	const modMatrix = [
		[-1, -1],
		[-1, 0],
		[-1, 1],
		[0, 0],
		[1, -1],
		[1, 0],
		[1, 1],
	];

	const checkBoundary = (counter, row, cell, modifierMatrix) => {
		if (board[row + modifierMatrix[0]]?.[cell + modifierMatrix[1]] === -1)
			counter++;
	};

	board.forEach((row) => {
		row.forEach((cell) => {
			let mines = 0;
		});
	});

	for (const row of board) {
		const newRow = [];

		for (const cell of row) {
			// Check boundaries
			if (cell === -1) break;
		}

		resultBoard.push(newRow);
	}

	return resultBoard;
};

console.log(
	mineSweeperSolver([
		[0, 0, -1, 0],
		[0, -1, -1, 0],
	])
);

const checkNeighbours = (cell) => {
	console.log(this);
	return 0;
};

//console.log(checkNeighbours([0, 0, -1, 0], [0, -1, -1, 0]));

const MineSweeperSolverV2 = (board) =>
	board.map((cell) => checkNeighbours(cell), board);

console.table(
	MineSweeperSolverV2([
		[0, 0, -1, 0],
		[0, -1, -1, 0],
	])
);

const arrt = [
	[1, 2, 3],
	[1, 4, 5],
];

const v = arrt.flatMap((arr) => arr.reduce((a, b) => a + b));
console.log(v);

/*Suma os valores da propiedade price do seguinte array de obxectos: */

const objects = [{ price: 1 }, { price: 2 }, { price: 3 }];

// Not giving an initial value means that the starting point of the arr is [Object object] which leads to str concatenation.
// That's why in this case one must specify the initial value
const prices = objects.reduce(
	(price, objectToGetPrice) => price + objectToGetPrice['price'],
	0
);

// With object destructuration

const objectDestructPrices = objects.reduce(
	(total, { price }) => total + price,
	0
);

/*
const nestedObjects = [
	{
		name: 'Volvo',
		sales: {
			price: 1,
			year: 2001,
		},
	},
	{
		name: 'Renault',
		sales: {
			price: 2,
			year: 2002,
		},
	},
];

const newPrices = nestedObjects.reduce(
	(totalPrice, addedPrice) => totalPrice + addedPrice['sales']['price'],
	0
);
console.log(newPrices);
*/
console.log(prices);

const minNums = [3, 4, 666, 2, 3, 4, 5, 6, 7];

const min = minNums.reduce((firstNumber, comapareNumber) =>
	Math.min(firstNumber, comapareNumber)
);

const minWithoutMathMin = minNums.reduce((firstNumber, comapareNumber) =>
	firstNumber < comapareNumber ? firstNumber : comapareNumber
);

console.log(Math.min(...minNums));
console.log(minWithoutMathMin);
console.log(min);
