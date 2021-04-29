var 가로 = 4;
var 세로 = 3;
var 색깔들 = ['red', 'red', 'orange', 'orange', 'green', 'green', 'yellow', 'yellow', 'white', 'white', 'pink', 'pink']; //백업변수
var 색깔후보 = 색깔들.slice();
색깔 = [];
function 셔플() {
    for (var i = 0; 색깔후보.length > 0; i++) {
        색깔 = 색깔.concat(색깔후보.splice(Math.floor(Math.random() * 색깔후보.length), 1));
    }
}
var 클릭플래그 = true;
var 클릭카드 = [];
var 완성카드 = [];
var 시작시간;

function 카드세팅(가로, 세로) {
    클릭플래그 = false;
    for (var i = 0; i < 가로*세로; i++) {
        var card = document.createElement('div');
        card.className = 'card';
        var cardInner = document.createElement('div');
        cardInner.className = 'card-inner';
        var cardFront = document.createElement('div');
        cardFront.className = 'card-front';
        var cardBack = document.createElement('div');
        cardBack.className = 'card-back';
        cardBack.style.backgroundColor = 색깔[i];
        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        card.appendChild(cardInner);
        // 즉시실행함수로 스코프 문제 해결
        (function (c) {
            card.addEventListener('click', function() {
                if (클릭플래그 && !완성카드.includes(c)) {
                    c.classList.toggle('flipped');
                    클릭카드.push(c);
                    if (클릭카드.length === 2) {
                        if (클릭카드[0].querySelector('.card-back').style.backgroundColor === 클릭카드[1].querySelector('.card-back').style.backgroundColor) {
                            완성카드.push(클릭카드[0], 클릭카드[1]);
                            클릭카드 = [];
                            if (완성카드.length === 12) {
                                var 끝시간 = new Date();
                                alert(`축하합니다! ${(끝시간 - 시작시간) / 1000}초 성공!`);
                                document.querySelector('#wrapper').innerHTML = '';
                                색깔후보 = 색깔들.slice();
                                색깔 = [];
                                완성카드 = [];
                                시작시간 = null;
                                셔플();
                                카드세팅(가로, 세로);
                            }
                        } else {
                            클릭플래그 = false;
                            setTimeout(function(){
                                클릭카드[0].classList.remove('flipped');
                                클릭카드[1].classList.remove('flipped');
                                클릭플래그 = true;
                                클릭카드 = [];
                            }, 1000);
                        }
                    }
                }
            });
        })(card);
        document.querySelector('#wrapper').appendChild(card);
    }

    document.querySelectorAll('.card').forEach(function (card, index) {
        // 카드 보여주기
        setTimeout(function() { 
            card.classList.add('flipped');
        }, 1000 + 100 * index); // 12개의 카드가 1초부터 2.2초까지 쫘르륵 열린다
        // 카드 감추기
        setTimeout(function() {
            document.querySelectorAll('.card').forEach(function (card, index) {
                card.classList.remove('flipped');
            });
            클릭플래그 = true;
            시작시간 = new Date();
        }, 5000);
    });
}

셔플();
카드세팅(가로, 세로);