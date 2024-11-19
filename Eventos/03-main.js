/*

Nunha páxina HTML hai un botón ao que fai referencia a variable button do
seguinte código. Indica que manexadores de eventos se executan dos seguintes:

button.addEventListener("click", () => console.log("1"));
button.removeEventListener("click", () => console.log("1"));
button.onclick = () => console.log(2);

Se ejecutaran ambos. Puesto que se añade como función anonima, el simbolo que representa el addEventlistener es diferente al de removeEventListener y esto significa
que el primer evento no será removido. 
*/

const button = document.querySelector('button');

button.addEventListener('click', () => console.log('1'));
button.removeEventListener('click', () => console.log('1'));
button.onclick = () => console.log(2);
