var word = document.querySelector('#word');
var form = document.querySelector('form');
var input = document.querySelector('input');
var result = document.querySelector('#result');

input.focus();

form.addEventListener('submit', function 콜백함수 (e) {
  e.preventDefault();
  // 제시어 끝 글자와 입력어 첫 글자가 같을 경우
  if (word.textContent[word.textContent.length - 1] === input.value[0]) {
    result.textContent = '딩동댕';
    word.textContent = input.value;
  // 제시어 끝 글자와 입력어 첫 글자가 다를 경우
  } else {
    result.textContent = '땡';
  }
  input.value = '';
  input.focus();
});