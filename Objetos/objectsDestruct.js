/*
const user = {
	id: 42,
	displayName: 'jdoe',
	fullName: {
		firstName: 'jhon',
		lastName: 'Doe',
	},
};


const { displayName } = user;
const { firstName } = user.fullName;

const {
	fullName: { lastName },
} = user;

const {
	displayName: nameVar,
	testVal = 'test', // Add a property + set default value.
	fullName: { firstName, lastName },
} = user;

console.log(nameVar, testVal, firstName, lastName);

function getUserId(id) {
	console.log(id);
}

getUserId(({ id } = user));

// With actual destruct one needs to specify in function definitions
// This actually makes a lot of sense because ARROW FUNCTIONS. It's actually quite used
// it just seemed normal on arrows but weird on normal def.
function getUserId({ id }) {
	console.log(id);
}
*/

/* Sets. Works fine with primitives, if it comes to be that a set of object is present the
thing that is compared is presumed to be the memory adresses, or well the pointer value that goes
to such object.

So in the case that obj and obj2 have the same values but not the same pointer they are different for the Set purpose.

const obj = {
	id: 1,
};

const obj2 = {
	id: 1,
};

const setTest = new Set([obj, obj2]);

console.log(setTest);

*/

/* Ejercicios */
/*Obxectos

1. Crea un obxecto chamado television coas propiedades marca, categoría
(televisores), unidades (4), prezo (354.99) e un método chamado importe que
devolva o prezo total das unidades (unidades x prezo). */

const television = {
	marca: 'Samsung',
	categoria: 'Televisores',
	unidades: 4,
	prezo: 354.99,
	importe: function () {
		return this.prezo * this.unidades;
	},
};

/*
2. Imaxinar que se recolle a seguinte información relativa a un xogo dun servidor:

const game = {
odds: {
team1: 1.33,
x: 3.25,
team2: 6.5,
}
};

Utilizando a desestruturación de obxectos crea as seguintes variables:
● team1: debe inicializarse co valor da propiedade team1 do obxecto inicial.
● draw: debe inicializarse co valor da propiedade x do obxecto inicial.
● team2: debe inicializarse co valor da propiedade team2 do obxecto inicial
*/

const game = {
	odds: {
		team1: 1.33,
		x: 3.25,
		team2: 6.5,
	},
};

/*
const {odds : {team1}} = game;
const {odds : {x}} = game;
const {odds : {team2}} = game
*/

const {
	odds: { team1, x, team2 },
} = game;

/*
3. Dado o seguinte obxecto:
const game = {
scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"]
};
a. Recorre o array game.scored e mostra por pantalla información do xogador
que marcou e o número de gol marcado. Exemplo: “Gol 1: Lewandowski”.

b. Crea un novo obxecto chamado scorers que conteña como propiedades o
nome dos xogadores que marcaron e como valor o número de goles que
marcaron respectivamente. Neste exemplo sería algo así: {Lewandowski: 2,
Gnarby: 1, Hummels: 1}
*/

const gameEjercicio3 = {
	scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
};

function getGoals({ scored }) {
	for (const [index, element] of scored.entries()) {
		console.log(`Gol ${index}: ${element}`);
	}
}

getGoals(gameEjercicio3);

function getScorers({ scored }) {
	const scorers = {};

	for (const [index, element] of scored.entries()) {
		if (!scorers.hasOwnProperty(element)) {
			scorers[element] = 1;
		} else if (scorers.hasOwnProperty(element)) {
			scorers[element] += 1;
		}
	}
	return scorers;
}

console.log(getScorers(gameEjercicio3));
