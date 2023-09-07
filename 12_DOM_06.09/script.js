

decrement.addEventListener('click', () => {
    updateCount(-1);
})

decrement10.addEventListener('click', () => {
    updateCount(-10);
})

increment.addEventListener('click', () => {
    updateCount(1);
})

increment10.addEventListener('click', () => {
    updateCount(10);
})

reset.addEventListener('click', () => {
    count.textContent = '0';
})

function updateCount(value){
    count.textContent = +count.textContent + value + '';
}