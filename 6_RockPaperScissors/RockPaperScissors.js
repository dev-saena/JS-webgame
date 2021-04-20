var 이미지좌표 = '0'; //left값
var 가위바위보 = { //딕셔너리 자료구조
    바위: '0',
    가위: '-142px',
    보: '-284px'
}

// 클릭했을 때의 이미지좌표 값을 가위,바위,보 반환
function 컴퓨터의선택(이미지좌표) {
    return Object.entries(가위바위보).find(function(v) {
        return v[1] === 이미지좌표;
    })[0];
}

// 이미지 스프라이트를 이용하여 0.1초 간격으로 묵찌빠순으로 돌아가게 함
var 인터벌;
function 인터벌메이커() {
    인터벌 = setInterval(function () {
        if (이미지좌표 === 가위바위보.바위) {
            이미지좌표 = 가위바위보.가위;
        } else if (이미지좌표 === 가위바위보.가위) {
            이미지좌표 = 가위바위보.보;
        } else {
            이미지좌표 = 가위바위보.바위;
        }
        document.querySelector('#computer').style.background = 
        `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${이미지좌표} 0`;
    }, 100);
}

인터벌메이커();

var 점수표 = {
    가위: 1,
    바위: 0,
    보: -1
}

// 버튼을 클릭하면 이미지가 잠깐 멈추고 승패결과가 나옴
document.querySelectorAll('.btn').forEach(function(btn){
    btn.addEventListener('click', function() {
        clearInterval(인터벌);
        setTimeout(function() {
            인터벌메이커();
        }, 1000);
        var 나의선택 = this.textContent;
        var 나의점수 = 점수표[나의선택];
        var 컴퓨터점수 = 점수표[컴퓨터의선택(이미지좌표)];
        var 점수차 = 나의점수 - 컴퓨터점수;
        if (점수차 === 0) {
            console.log('비겼습니다');
        } else if ([-1, 2].includes(점수차)) {
            console.log('이겼습니다');
        } else {
            console.log('졌습니다 ㅠㅠ');
        }
    });
});