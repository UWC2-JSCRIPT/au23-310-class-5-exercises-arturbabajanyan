let ulElement = document.querySelector('ul.today-list');

ulElement.addEventListener(('click'), (e) => {
	if (e.target.nodeName.toLowerCase() == 'span') {
		e.target.parentNode.classList.toggle('done');
	}
	if (e.target.className == 'delete') {
		e.target.parentElement.remove();
	}
})

// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)
const addListItem = function (e) {
	e.preventDefault();
	const input = this.parentNode.getElementsByTagName('input')[0];
	const text = input.value; // use this text to create a new <li>

  if (input.value != '') {

    const newLiEl = document.createElement('li');
    const newAEl = document.createElement('a');
    newAEl.className = 'delete';
    newAEl.textContent = 'Delete';
  
    const newSpanItem = document.createElement('span');
    newSpanItem.textContent = `${text}\n`;
  
    newLiEl.append(newSpanItem, newAEl);
    ulElement.appendChild(newLiEl);
  
    input.value = '';
    
  }
}

const addItem = document.querySelector('a.add-item');
addItem.addEventListener('click', addListItem);
