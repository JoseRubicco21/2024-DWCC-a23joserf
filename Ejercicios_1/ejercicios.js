'use-strict';

// 1. Crea unha variable que almacene un día da semana de luns a domingo. En función
// do valor da variable mostra unha mensaxe indicando se o día é laborable ou non.

function normalizeString(string) {
	return string
		.normalize('NFD') // Normalize makes things so that Sábado becomes Sa'bado
		.toLowerCase()
		.replace(/[\u0300-\u036f]/gu, ''); // Replaces range of 0300-036f unicode chars for "" globally.
}

let diaDeLaSemana = 'Sábado';

diaDeLaSemana = normalizeString(diaDeLaSemana);

if (diaDeLaSemana === 'sabado' || diaDeLaSemana === 'domingo') {
	console.log('Es dia no laborable');
} else {
	console.log('Es dia laborable');
}

// 2. Crea 3 variables e inicialízaas con 3 números diferentes. Mostra por pantalla o maior
// dos 3 números

let num1 = 10;
let num2 = 30;
let num3 = 40;

//
if (num1 > num2 && num1 > num3) result = num1;
if (num2 > num1 && num2 > num3) result = num2;
if (num3 > num1 && num3 > num1) result = num3;

console.log(
	`El numero más grande entre ${num1}, ${num2}, ${num3} es : ${result}`
);

// 3. Escribe os números pares do 0 ao 30, incluídos
for (let i = 0; i <= 30; i += 2) {
	console.log(i);
}

//4. Escribe as potencias de 2, dende 2⁰ ata 2^20. Para cada potencia debe saír un texto
//similar a “2 elevado a 0 = 1”

for (let i = 0; i <= 20; i++) {
	console.log(`2 elevado a ${i} = ${2 ** i}`);
}

//5. Inicializa unha variable a un número, calcula o seu factorial e mostra a resultado por
//consola. (5! = 5*4*3*2*1).

let numeroFactorial = 5;
let resultadoFactorial = 1;

for (let i = resultadoFactorial; i <= numeroFactorial; i++) {
	resultadoFactorial *= i;
	console.log(resultadoFactorial);
}

//6. Cálculo do IMC (índice de masa corporal). IMC = peso (kg) / [estatura (m)] 2
// 	a. Almacena en variables o peso e altura de dúas persoas.
//  b. Calcula o IMC das dúas persoas.
//  c. Indica que persoa ten o maior IMC cunha cadea similar a: 'O IMC (25.3) da
//  primeira persoa é maior que o da segunda persoa (22.5)!'

let pesoPersona1 = 68;
let estaturaPersona1 = 1.71;
let pesoPersona2 = 52;
let estaturaPersona2 = 1.51;

function calcularIMC(peso, altura) {
	return peso / (altura ^ 2);
}

function calcularIMCMayor(imc1, imc2) {
	let result =
		imc1 > imc2
			? `El IMC (${imc1}) de la primera persona es mayor que el de la segunda persona ${imc2}`
			: `El IMC (${imc2}) de la segunda persona es mayor que el de la primera persona`;
	console.log(result);
}

calcularIMCMayor(
	calcularIMC(pesoPersona1, estaturaPersona1),
	calcularIMC(pesoPersona2, estaturaPersona2)
);

function aplicarDescuento(precio, descuento) {
	return precio - (precio * descuento) / 100;
}

let precio = 100;
let descuento = 30;

console.log(aplicarDescuento(precio, descuento));
