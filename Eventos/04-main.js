'use-strict';

const paragraph = document.querySelector('p');
const list = document.querySelector('ul');

const toggleList = () => {
	list.classList.toggle('hidden');
};

paragraph.addEventListener('click', (ev) => {
	toggleList();
});
