/* 1. Números aleatorios:
a. Xera un número enteiro aleatorio entre 0 e 3 (incluídos).
b. Xera un número enteiro aleatorio entre 1 e 3 (incluídos).
c. Crea unha función que devolva un número aleatorio entre os dous valores
pasados como parámetros. Así, por exemplo, a seguinte instrución debe
mostrar un número aleatorio entre 5 e 10 (incluídos):
console.log(numeroAleatorio(5, 10));
*/

function generateRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(generateRandomNumber(0, 3));
console.log(generateRandomNumber(1, 3));
console.log(generateRandomNumber(5, 10));
console.log(generateRandomNumber(-10, 3));
/*
2. Crea unha función á que se lle pase como parámetro o número de minutos e
devolva un string indicando a súa equivalencia en horas e minutos.
*/

function minutesToHourMinuteString(minutes) {
	const hours = Math.floor(minutes / 60);
	const remainderMinutes = minutes - hours * 60;
	return `Los ${minutes} son : ${hours} horas con ${remainderMinutes}`;
}

console.log(minutesToHourMinuteString(500));

/**
Crea unha función que dado o radio dun círculo, devolva a súa área. 

E fai outra función que reciba o radio e devolva o perímetro do círculo. 

Mostra por consola oresultado das funcións usando dúas cifras decimais.

*/

function getArea(radio) {
	return Math.PI * Math.pow(radio, 2);
}

function getPerimter(radio) {
	return 2 * Math.PI * radio;
}

console.log(`El area del circulo es ${getArea(10).toFixed(2)}`);
console.log(`El permitro del circulo es ${getPerimter(10).toFixed(2)}`);
