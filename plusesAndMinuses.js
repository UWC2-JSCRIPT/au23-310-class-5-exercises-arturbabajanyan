const newH1 = document.createElement("h1");
const nodeH1 = document.createTextNode("0");
newH1.appendChild(nodeH1);
bodyEl = document.getElementsByTagName("body")[0];
bodyEl.appendChild(newH1);
newH1.setAttribute('id','h1El');

const buttonPlus = document.createElement("button");
const buttonPlusNode = document.createTextNode("+");
buttonPlus.appendChild(buttonPlusNode);
bodyEl.appendChild(buttonPlus);
buttonPlus.id = 'plus';
buttonPlus.setAttribute('style', 'height: 50px;width: 50px;font-size: 40px;')

const buttonMinus = document.createElement("button");
const buttonMinusNode = document.createTextNode("-");
buttonMinus.appendChild(buttonMinusNode);
bodyEl.appendChild(buttonMinus);
buttonMinus.id = 'minus';
buttonMinus.setAttribute('style', 'height: 50px;width: 50px;font-size: 40px;')

// When a user clicks the + element, the count should increase by 1 on screen.

let headerEl = document.getElementById('h1El');

const plusEl = document.getElementById('plus');
plusEl.addEventListener('click', () => {
    headerEl.innerHTML = (+headerEl.innerHTML + 1);
});

// // When a user clicks the – element, the count should decrease by 1 on screen.

const minusEl = document.getElementById('minus');
minusEl.addEventListener('click', () => {
    headerEl.innerHTML = (+headerEl.innerHTML - 1);
});