var 바디 = document.body;
var 테이블 = document.querySelector('table');
var 칸들 = [];
var 줄들 = [];
var 턴 = 'X';
var 결과 = document.querySelector('#result');

// 틱택토 클릭했을 때 O,X턴 및 승리 체크
var 비동기콜백 = function(e) { 
    var 몇줄 = 줄들.indexOf(e.target.parentNode);
    var 몇칸 = 칸들[몇줄].indexOf(e.target);
    
    if (칸들[몇줄][몇칸].textContent !== '') { // 빈칸이 아닐 경우
    } else { //빈칸이면
        칸들[몇줄][몇칸].textContent = 턴;

        // 세칸 다 채워졌나?
        var 다참 = false;
        // 가로줄 검사
        if (
            칸들[몇줄][0].textContent === 턴 && 
            칸들[몇줄][1].textContent === 턴 && 
            칸들[몇줄][2].textContent === 턴
        ) {
            다참 = true;
        }
        // 세로줄 검사
        if (
            칸들[0][몇칸].textContent === 턴 &&
            칸들[1][몇칸].textContent === 턴 &&
            칸들[2][몇칸].textContent === 턴 
        ) {
            다참 = true;
        }
        // 대각선 검사
        if (몇줄 - 몇칸 === 0) {
            if (
                칸들[0][0].textContent === 턴 &&
                칸들[1][1].textContent === 턴 &&
                칸들[2][2].textContent === 턴 
            ) {
                다참 = true;
            }
        }
        if (Math.abs(몇줄 - 몇칸) === 2) {
            if (
                칸들[0][2].textContent === 턴 &&
                칸들[1][1].textContent === 턴 &&
                칸들[2][0].textContent === 턴 
            ) {
                다참 = true;
            }
        }


        if (다참) {
            결과.textContent = 턴 + '님이 승리';
            // 초기화
            턴 = 'X';
            칸들.forEach(function (줄) { //2차원 배열은 반복문이 2번 필요
                줄.forEach(function (칸) {
                    칸.textContent='';
                });
            });
        } else {
            if (턴 === 'X') {
                턴 = 'O';
            } else {
                턴 = 'X';
            }
        }
        
    }
}

// 틱택토 3x3 칸 만들기
for (var i = 1; i <= 3; i+= 1) {
    var 줄 = document.createElement('tr');
    줄들.push(줄);
    칸들.push([]);
    for (var j = 1; j <= 3; j += 1) {
        var 칸 = document.createElement('td');
        칸.addEventListener('click', 비동기콜백);
        칸들[i - 1].push(칸);
        줄.appendChild(칸);
    }
    테이블.appendChild(줄);
}

// *****칸도 html로 만들면 어떨까?*****
// *****무승부일 때 무승무 표시와 새 게임 되게 만들기*****