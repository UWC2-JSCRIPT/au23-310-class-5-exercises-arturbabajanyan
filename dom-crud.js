// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>
const mainEl = document.getElementsByTagName('main')[0];

const aEl = document.createElement('a');
const aNode = document.createTextNode('Buy Now!');
aEl.appendChild(aNode);
aEl.id = 'cta';

mainEl.appendChild(aEl);

// Access (read) the data-color attribute of the <img>,
// log to the console
const imgEl = document.getElementsByTagName('img')[0];
const showColorData = imgEl.dataset.color;
console.log(showColorData);

// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"
document.querySelectorAll('li')[2].className = 'highlight';


// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
const pEl = document.querySelector('p');
// OR
// const pEl = mainEl.lastElementChild.previousElementSibling;
mainEl.removeChild(pEl);