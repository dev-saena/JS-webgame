var 바디 = document.body;
var 단어 = document.createElement('div');
단어.textContent = '제로초';
바디.append(단어);
var 폼 = document.createElement('form');
바디.append(폼);
var 입력창 = document.createElement('input');
폼.append(입력창);
var 버튼 = document.createElement('button');
버튼.textContent = '입력!';
폼.append(버튼);
var 결과창 = document.createElement('div');
바디.append(결과창);

폼.addEventListener('submit', function 콜백함수 (e) {
  e.preventDefault();
  // 제시어 끝 글자와 입력어 첫 글자가 같을 경우
  if (단어.textContent[단어.textContent.length - 1] === 입력창.value[0]) {
    결과창.textContent = '딩동댕';
    단어.textContent = 입력창.value;
    입력창.value = '';
    입력창.focus();
  // 제시어 끝 글자와 입력어 첫 글자가 다를 경우
  } else {
    결과창.textContent = '땡';
    입력창.value = '';
    입력창.focus();
  }
});