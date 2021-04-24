var word = document.querySelector('#word');
var form = document.querySelector('form');
var input = document.querySelector('input');
var result = document.querySelector('#result');
var num1 = Math.ceil(Math.random() * 9);
var num2 = Math.ceil(Math.random() * 9);
var multiplication = num1 * num2;

word.textContent = `${String(num1)} x ${String(num2)} =`;
input.focus();

form.addEventListener('submit', function 콜백함수(e) {
    e.preventDefault();
    if (multiplication === Number(input.value)) {
        result.textContent = '딩동댕';
        num1 = Math.ceil(Math.random() * 9);
        num2 = Math.ceil(Math.random() * 9);
        multiplication = num1 * num2;
        word.textContent = `${String(num1)} x ${String(num2)} =`;
    } else {
        result.textContent = '땡';
    }
    input.value = '';
    input.focus();
});