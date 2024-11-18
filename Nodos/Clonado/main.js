/*
Imaxinar que a variable elemento fai referencia a un elemento do DOM e text é
unha variable con unha cadea de texto que inclúe etiquetas HTML. ¿Cales dos
seguintes comandos farán exactamente o mesmo?:
a. elemento.append(document.createTextNode(text));
b. elemento.innerHTML = text;
c. elemento.textContent = text;
*/

/* A y C */

/* 2
Dada unha lista <ol> con varios elementos <li>, crea o código necesario para
eliminar todos os <li> da lista. */

const removeLIofOl = (orderedList) =>
	[...orderedList.children].forEach((li) => li.remove());

removeLIofOl(document.querySelector('#ex2'));

/* 3
Dado o seguinte código, ¿por que segue aparecendo o “Texto” despois de borrar a
táboa?
*/
let taboa = document.getElementById('taboa');
taboa.remove();

// remove() remueve los elementos html, texto en este caso no es un elemento sino un nodo #text, por ende no lo quita incluso si esta "dentro" de la tabla.

/*
Crea un documento HTML que conteña un elemento <ul>. Dende JavaScript crea 4
elementos <li> e engádeos á lista <ul>, de tal forma que sexan visibles no
navegador.
*/

const createNLis = (numberOfLis) => {
	let list = [];
	for (let index = 0; index < numberOfLis; index++) {
		list[index] = document.createElement('li');
		list[index].innerText = `List item ${index + 1}`;
	}
	return list;
};

document.querySelector('#ex4').append(...createNLis(4));

/*5
Escribe o código JavaScript para inserir “<li>2</li><li>3</li>” entre os dous <li>
seguintes:
<ul id="listaULExercicio5">
<li id="one">1</li>
<li id="two">4</li>
</ul>
 */

const two = document.createElement('li');
two.append('2');
const three = document.createElement('li');
three.append('3');

document.querySelector('li#one').after(two);
document.querySelector('li#two').before(three);

/**
 6
let arbore = {
"Fish": {
"trout": {},
"salmon": {}
},
"Tree": {
"Huge": {
"sequoia": {},
"oak": {}
},
"Flowering": {
"apple tree": {},
"magnolia": {}
}
} 
 */

// Al nodes are ULs unless they are a leaf,

// Returns a Node
/*
const isLeaf = (node) => (
    Object.keys(node) === 0 ? true : false
)

const generateTreeNode = (node) => {
    if (isLeaf(node)) {
        const li = document.createElement("li")
        li.innerText = node.
    } else {

    }
}
*/

const generateNode = (nodeType, value = '') => {
	const node = document.createElement(nodeType);
	node.innerText = value;
	return node;
};

const buildTree = (objectToTransform) => {
	const rootNode = generateNode('ul');

	for (const key in objectToTransform) {
		const listItem = generateNode('li', key);
		rootNode.append(listItem);

		if (Object.keys(objectToTransform[key]).length != 0) {
			listItem.append(buildTree(objectToTransform[key]));
		}
	}

	return rootNode;
};
/*
const conciseBuildTree = (obj, root = generateNode('ul')) => {
	for (const k in obj) {
		Object.keys(obj[k]).length != 0
			? root.append(generateNode('li', k))
			: generateNode('li', k).append(buildTree(obj[k], this));
	}
	return root;
};*/
// const generateNode = (value, callback
// ) => {
// 	console.log(value);
// 	if (Object.keys(value).length === 0) return genLi(value);

// 	for (const key in value) {
// 		const currentNode = generateNode(value[key], content);
// 		console.log(currentNode);
// 	}
// };

let arbore = {
	Fish: {
		trout: {},
		salmon: {},
	},
	Tree: {
		Huge: {
			sequoia: {},
			oak: {},
		},
		Flowering: {
			'apple tree': {},
			magnolia: {},
		},
	},
};

let Fish = {
	trout: {},
	salmon: {},
};

//const t = buildTree(arbore);
//console.log(t);

const transformedTree = buildTree(arbore);
document.body.appendChild(transformedTree);
//console.log(Object.values(arbore), Object.keys(arbore));

function crearCalendario(elemento, ano, mes) {
	// This basically transforms the getDay index gotten into the days array declared.
	const offset = (new Date(ano, mes).getDay() + 6) % 7;
	const days = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];

	const numOfDays = new Date(ano, mes, 0).getDate();

	const table = document.createElement('table');
	const tableBody = document.createElement('tbody');
	const tableHeader = document.createElement('thead');

	// create the basic struct of thet table.
	table.append(tableHeader);
	table.append(tableBody);

	// Create the table structure knwoing that there will always be 5 rows first the header, then the
	// cells.

	// Creation of the header
	for (const day of days) {
		const tableHeaderCell = document.createElement('th');
		tableHeaderCell.append(day);
		tableHeader.append(tableHeaderCell);
	}

	// Creation of the body
	for (let index = 0; index < 5; index++) {
		const tableRow = document.createElement('tr');
		for (const [j, day] of days.entries()) {
			const tableCell = document.createElement('td');
			// Adjust for offset
			const valueToAssign = j + 7 * index - offset + 1;

			// Only populate cells with valid days
			if (valueToAssign >= 1 && valueToAssign <= numOfDays) {
				tableCell.append(valueToAssign);
			}
			tableRow.append(tableCell);
		}
		tableBody.append(tableRow);
	}

	console.log(table);
	console.log(new Date(ano, mes));
	console.log(offset);

	elemento.append(table);
}

crearCalendario(document.body, 2022, 11);

// 8

const tablaOrdenar = document.getElementById('taboaOrdenar');
const elementsToOrder = [
	...tablaOrdenar.firstElementChild.nextElementSibling.children,
];

elementsToOrder.sort((first, second) => {
	const textA = first.firstElementChild.innerText.toLowerCase();
	const textB = second.firstElementChild.innerText.toLowerCase();
	return textA.localeCompare(textB); // Compare strings alphabetically
});

elementsToOrder.forEach((el) => tablaOrdenar.append(el));

// 9

const animalList = document.querySelector('#listaAnimais');

const addNumber = (element) => {
	const childs = element.children;

	for (const child of childs) {
		console.log(child);
	}
};

addNumber(animalList);
