// 1 ¿Como calcularías o número de cifras dun número enteiro positivo utilizando
// propiedades e métodos dos obxectos vistos ata agora?

function calculateLengthOfNumber(number) {
	return `${number}`.length;
}

console.log(
	`El numero de cifras de un numero entero positivo es : ${calculateLengthOfNumber(
		332244
	)} `
); // 6

// Integer with sign
function calculateLengthOfNumberWithSign(number) {
	return `${number.abs()}`.length;
}
