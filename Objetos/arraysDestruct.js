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
let players1, players2;
[players1, players2] = [...players];

console.log(players1, players2);

/*

b. O primeiro xogador do array é o porteiro e o resto son xogadores de campo.
Crea unha variable chamada gk que conteña o porteiro do primeiro equipo e
unha variable de tipo array chamada fieldPlayers que conteña o resto de
xogadores do equipo.
*/
let gk, fieldPlayers;
[gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

/*
c. Crea un array allPlayers que conteña os xogadores dos dous equipos.
*/

let allPlayers;
[...allPlayers] = [...players1, ...players2];
console.log(allPlayers);

/*
d. O primeiro equipo substituíu os xogadores iniciais por 'Thiago', 'Coutinho',
'Periscic'. Crea unha nova variable de tipo array chamada players1Final que
conteña todos os xogadores: os iniciais e tamén os 3 novos.
*/

let players1Final;
[...players1Final] = [...players1, 'Thiago', 'Coutinho', 'Periscic'];
console.log(players1Final);

/*
2. Dado un array con nomes de variables formados por dúas palabras separadas por
“_”, fai as operacións necesarias para mostrar por consola os nomes das variables
en formato camelCase. Por exemplo, se o array de entrada é [“first_name”, “
last_NAME”], deberase mostrar por consola “firtsName” e “lastName”.
14
*/
