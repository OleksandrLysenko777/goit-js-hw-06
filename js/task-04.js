let counterValue = 0;
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueSpan = document.getElementById('value');
const clickDecrementBtn = (event) => {
    counterValue -= 1;
    valueSpan.textContent = counterValue;
};

const clickIncrementBtn = (event) => {
    counterValue += 1;
    valueSpan.textContent = counterValue;
};
incrementBtn.addEventListener('click', clickIncrementBtn);
decrementBtn.addEventListener('click', clickDecrementBtn);
