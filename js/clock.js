// 시계를 업데이트하는 함수
function updateClock() {
    const clock = document.getElementById("clock");
    
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
  
    // 12시간제로 표시하기 위한 조건 (12시간 기준으로 오전/오후 추가 가능)
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
  
    // 시계 텍스트 업데이트
    clock.textContent = `${hours}:${minutes}:${seconds}`;
  }
  
  // 1초마다 시계 업데이트
  setInterval(updateClock, 1000);
  
  // 페이지가 로드될 때 시계를 처음 업데이트
  updateClock();