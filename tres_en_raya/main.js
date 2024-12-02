'use-strict';

/* Player 1 : 1, Machine : -1, Empty : 0 */
const board = [
	[0, 0, 1],
	[0, 1, 1],
	[1, 0, 1],
];

// negative needs = [i][j+2] == [i+1][j+1] === [i+2][j]
const validateRow = (board) => {
	for (row of board) {
		if (row[0] === row[1] && row[1] === row[2]) return true;
	}

	return false;
};

const validateCols = (board) => {
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[i].length; j++) {
			if (
				board[i][j] === board?.[i + 1][j] &&
				board[i][j] === board?.[i + 2][j]
			)
				return true;
		}
		return false;
	}
};

const validatePositiveDiagonal = (board) => {
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[i].length; j++) {
			if (
				board[i][j] === board?.[i + 1]?.[j + 1] &&
				board[i][j] === board?.[i + 2]?.[j + 2]
			)
				return true;
		}
	}
	return false;
};

const validateNegativeDiagonal = (board) => {
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[i].length; j++) {
			if (
				board[board.length - 1][board.length - 1] ===
					board?.[board.length - 1]?.[board.length - 1] &&
				board[board.length - 1][board.length - 1] ===
					board?.[board.length - 2]?.[board.length - 2]
			)
				return true;
		}
	}
	return false;
};

const validateBoard = (board, [...validations]) => {
	let gameState = false;

	for (let i = 0; i < validations.length; i++) {
		if (gameState == true) return gameState;
		gameState = validations[i](board);
		console.log(gameState);
	}

	return gameState;
};

validateBoard(board, [
	validateRow,
	validateCols,
	validatePositiveDiagonal,
	validateNegativeDiagonal,
]);

/* 0,1,2,
   3,4,5,
   6,7,8
*/

/** Random AI difficulty */

const generateRandomNumber = (min, max) =>
	Math.floor(Math.random() * (max - min + 1)) + min;

const validatePossibleMove = (board) => {
	const i = generateRandomNumber(0, board.length - 1);
	const j = generateRandomNumber(0, board.length - 1);
	if (board[i][j] === 0) {
		return true;
	}
	return false;
};

/* Programming the actual IA is ??? 
    Make one that always chooses random,
    Make one that makes actually good choices? --> actually needs thought
    Make one that is unwinnable, as it's always tieable? 
*/

console.log(validatePossibleMove(board));
