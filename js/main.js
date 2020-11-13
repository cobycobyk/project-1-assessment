/*----- constants -----*/
/*----- app's state (variables) -----*/
let num;
/*----- cached element references -----*/
const valueEl = document.getElementById('input');
const numEl = document.getElementById('num')
/*----- event listeners -----*/
document.getElementById('plus').addEventListener('click', handlePlusClick);
document.getElementById('minus').addEventListener('click', handleMinusClick);
/*----- functions -----*/
init ()
function init() {
    num = 0;
    valueEl.value = 1;
    render();
};
function render() {
    if (num < 0) numEl.style.color = 'red';
    numEl.textContent = num;
};
function handlePlusClick(evt) {
    let input = Number(valueEl.value);
    num += input;
    valueEl.value = '';
    render();
};
function handleMinusClick(evt) {
    let input = Number(valueEl.value);
    num -= input;
    valueEl.value = '';
    render();
};