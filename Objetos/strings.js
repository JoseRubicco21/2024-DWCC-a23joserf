//1. Dada a seguinte constante, fai as operacións necesarias para que o primeiro
// carácter estea en maiúscula:

const cadea = 'desenvolvemento web';
// engade o teu código aquí
novaCadea = cadea.charAt(0).toUpperCase().concat(cadea.slice(1, cadea.length));

console.log(novaCadea); // 'Desenvolvemento web'

/**
 *  A lot more simple lol.
 * 	cadea.replace("d", "D");
 */

// 2. Crea unha función á que se lle pase unha cadea e devolva a cadea en sentido
// inverso.

function reverseString(string) {
	return string.split('').reverse().join(''); // Reverse is an array function so, split -> into array of chars -> reverse array -> join array into one.
	// Could use reduce, but why would you want to do that.
}

console.log(reverseString('I am a string')); // gnirts a ma I

// 3. Crea unha función á que se lle pase unha cadea de números e devolva unha cadea
// da mesma lonxitude formada por * e as últimas 4 cifras do parámetro de entrada.

function enmascarar(string) {
	const slicedString = string.slice(-4);
	const result = slicedString.padStart(string.length, '*');
	return result;
}

/* Simpler */

function enmascarar2(str) {
	return str.slice(-4).padStart(str.length, '*');
}

console.log(enmascarar('1234123412347777')); // ************7777
console.log(`Enmascarar 2 : ${enmascarar2('1234123412347777')}`);
