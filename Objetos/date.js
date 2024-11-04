// 1. Mostra o día da semana (en letra) do 25 de xullo do ano actual.

const today = new Date();
const day = new Date(today.getFullYear(), 6, 25);

function getLetterOfDay(day) {
	switch (day.getDay()) {
		case 0:
			return 'D';
		case 1:
			return 'L';
		case 2:
			return 'M';
		case 3:
			return 'X';
		case 4:
			return 'J';
		case 5:
			return 'V';
		case 6:
			return 'S';
		default:
	}
}
console.log(day);
console.log(getLetterOfDay(day));

// Other ways to solve:
// Provided by: Noa
const dayNames = ['D', 'L', 'M', 'X', 'J', 'V', 'S'];
console.log(dayNames[day.getDay()]);

// 2. Crea unha función á que se lle pase un mes (1-12) e un ano e devolva o número de
// días dese mes.

function getDaysOfMonth(month, year) {
	if (month > 12 || month < 1) {
		console.error('Number passed is not in range');
		return;
	}
	// Credits to sergio the magic math man I'm -stealing- borrowing his code;
	const date = new Date(year, month, 0);
	return date.getDate();
}

console.log(getDaysOfMonth(2, 2024));

// 3. Crea unha función á que se lle pase unha data e que devolva true se é fin de
// semana.

function isWeekend(date) {
	return date.getDay() === 0 || date.getDay() === 6 ? true : false;
}

// Even a more shorthand

function isWeekendShorthand(date) {
	return date.getDay() === 0 || date.getDay() === 6;
}

console.log(isWeekend(new Date()));
console.log(isWeekendShorthand(new Date()));
// 4. Crea unha función que reciba unha data como parámetro e devolva o número de
// días que pasaron dende que comezou o ano.

function getDaysPassed(date) {
	const initialDayOfYear = new Date(date.getFullYear(), 0);
	const difference = date.getTime() - initialDayOfYear.getTime();
	const total = Math.round(difference / (1000 * 3600 * 24));
	return total;
}

console.log(getDaysPassed(today));
