// When a user clicks the + element, the count should increase by 1 on screen.

let headerEl = document.getElementById('h1El');

const plusEl = document.getElementById('plus');
plusEl.addEventListener('click', () => {
    headerEl.innerHTML = (+headerEl.innerHTML + 1);
});

// When a user clicks the – element, the count should decrease by 1 on screen.

const minusEl = document.getElementById('minus');
minusEl.addEventListener('click', () => {
    headerEl.innerHTML = (+headerEl.innerHTML - 1);
});