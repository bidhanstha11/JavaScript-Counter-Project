//set initial count
let count = 0;

//Select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(btn => btn.addEventListener('click', function(e) {
    const styles = e.currentTarget.classList;
    if (styles.contains('decrease')) {
        count--;
    } else if (styles.contains('increase')) {
        count++;
    } else if (styles.contains('reset')) {
        count = 0;
    }
    if (count > 0) {
        value.style.color = 'Green'
    } else if (count < 0) {
        value.style.color = 'Red'
    } else {
        value.style.color = 'Black'
    }
    value.textContent = count;
}))