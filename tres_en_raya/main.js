'use-strict';

/**
 * =============================
 *  GAME LOGIC
 * =============================
 */
const BOARD_SETTINGS = {
	x: 3,
	y: 3,
	get length() {
		return this.x * this.y;
	},
};

let boardAvailabilityState = Array(BOARD_SETTINGS.length).fill(
	true,
	0,
	BOARD_SETTINGS.length
);

let board = [
	[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0],
];

const GAME = {
	DEFAULT_STATE: { state: false, player: 0 },
	STATE: { state: false, player: 0 },
	TURN: 1,
	changeTurn() {
		this.TURN *= -1;
		console.log(this.TURN);
	},
};

function printBoard(board) {
	console.table(board);
}

/**
 * ==========================
 * 	BOARD MODIFICATION
 * ==========================
 */

function updateBoard({ x, y }, value) {
	board[x][y] = value;
}

function updateAvailabilityBoard(index) {
	boardAvailabilityState[index] = false;
}

function addElementToBoard(player, target) {
	const elementToAdd = document.createElement('i');
	if (player === 1)
		elementToAdd.classList.add('fa-solid', 'fa-x', 'm-5', 'p-5');
	if (player === -1)
		elementToAdd.classList.add('fa-regular', 'fa-circle', 'm-5', 'p-5');

	target.append(elementToAdd);
}

/**
 *  =================
 *  INPUT VALIDATION
 *  =================
 */

function validateInput(index) {
	if (boardAvailabilityState[index]) return true;
	return false;
}

/**
 * =============================
 * BOARD VALIDATION
 * =============================
 */

const validateRow = (board) => {
	for (row of board) {
		if (row[0] != 0 && row[0] === row[1] && row[1] === row[2])
			return { state: true, player: row[0] };
	}
	return GAME.DEFAULT_STATE;
};

const validateCols = (board) => {
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[i].length; j++) {
			if (
				board[i][j] != 0 &&
				board[i][j] === board?.[i + 1][j] &&
				board[i][j] === board?.[i + 2][j]
			)
				return { state: true, player: board[i][j] };
		}
		return GAME.DEFAULT_STATE;
	}
};

const validatePositiveDiagonal = (board) => {
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[i].length; j++) {
			if (
				board[i][j] != 0 &&
				board[i][j] === board?.[i + 1]?.[j + 1] &&
				board[i][j] === board?.[i + 2]?.[j + 2]
			)
				return { state: true, player: board[i][j] };
		}
	}
	return GAME.DEFAULT_STATE;
};

const validateNegativeDiagonal = (board) => {
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[i].length; j++) {
			if (
				board[board.length - 1][board.length - 1] != 0 &&
				board[board.length - 1][board.length - 1] ===
					board?.[board.length - 1]?.[board.length - 1] &&
				board[board.length - 1][board.length - 1] ===
					board?.[board.length - 2]?.[board.length - 2]
			)
				return {
					state: true,
					player: board[board.length - 1][board.length - 1],
				};
		}
	}
	return GAME.DEFAULT_STATE;
};

const validateTie = (board) => {
	const flattedBoard = board.flat();
	if (!flattedBoard.includes(0)) return { state: true, player: 0 };
	return GAME.DEFAULT_STATE;
};

const validateBoard = (board, [...validations]) => {
	for (const validationStrat of validations) {
		let gameState = validationStrat(board);
		if (gameState.state == true) return gameState;
	}
	return GAME.DEFAULT_STATE;
};

const VALIDATIONS = [
	validateRow,
	validateCols,
	validatePositiveDiagonal,
	validateNegativeDiagonal,
	validateTie,
];

/**
 * ========================
 * 	AI Logic
 * ========================
 *  */

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

// Transform child element of a div list into a index
const ArrayIndexToMatrixIndex = (int, rowNumber, colNumber) => {
	const i = Math.floor(int / colNumber);
	const j = int % rowNumber;
	return { x: i, y: j };
};

/**
 * ==========State)) {
		updateAvailabilityBoard(indexOfCell);
		updateBoard(matrixIndices, 2);
 * ENTRYPOINT
 * ==========
 */

const boardContainer = document.getElementById('board-container');
const elementBoard = [...boardContainer.children];

function handleBoard(event) {
	const indexOfCell = elementBoard.indexOf(event.target);
	const matrixIndices = ArrayIndexToMatrixIndex(
		indexOfCell,
		BOARD_SETTINGS.x,
		BOARD_SETTINGS.y
	);

	if (validateInput(indexOfCell, boardAvailabilityState)) {
		updateAvailabilityBoard(indexOfCell);
		updateBoard(matrixIndices, GAME.TURN);
		addElementToBoard(GAME.TURN, event.target);
		GAME.changeTurn();
		GAME.STATE = validateBoard(board, VALIDATIONS);
		console.log(GAME.STATE);
		console.table(board);
	}
}

function init() {
	boardContainer.addEventListener('click', handleBoard);
	console.log(validateBoard(board, VALIDATIONS));
}

init();
addElementToBoard;
