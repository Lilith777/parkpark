document.addEventListener("DOMContentLoaded", function() {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const loginBtn = document.getElementById("login-btn");
    const messageDiv = document.getElementById("message");
    const greetingDiv = document.getElementById("greeting");

    // 로컬스토리지에서 로그인 상태를 확인하여 배경색을 설정
    if (localStorage.getItem("loggedIn") === "true") {
        console.log("로그인 상태: true"); // 로그인 상태 콘솔 확인
        // 로그인 상태일 때 로그인 창을 숨기고 인사 텍스트 숨김
        document.getElementById("login-container").style.display = "none";
        greetingDiv.style.display = "none"; // 로그인 후 인사 텍스트 숨기기
        changeBackgroundColor(); // 배경색을 랜덤으로 변경
        messageDiv.textContent = "오늘 당신의 행운의 색깔!";
    } else {
        console.log("로그인 상태: false");
        // 로그인하지 않은 상태에서 인사 텍스트는 보이게 설정
        greetingDiv.style.display = "block"; // 기본적으로 보이게 설정
    }

    // 로그인 시 동작
    loginBtn.addEventListener("click", function() {
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (username && password) {
            // 로그인 정보 로컬 스토리지에 저장
            localStorage.setItem("loggedIn", "true");

            // 로그인 후 배경색을 랜덤하게 변경
            changeBackgroundColor();

            // "오늘 당신의 행운의 색깔!" 메시지 표시
            messageDiv.textContent = "오늘 당신의 행운의 색깔!";

            // 입력 필드 비우기
            usernameInput.value = '';
            passwordInput.value = '';

            // 로그인 창 숨기기
            document.getElementById("login-container").style.display = "none";
            greetingDiv.style.display = "none"; // 로그인 후 인사 숨기기
        } else {
            alert("사용자 이름과 비밀번호를 입력하세요.");
        }
    });

    // 배경색 변경 함수
    function changeBackgroundColor() {
        const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FFFF33"];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        console.log("배경색 변경: " + randomColor); // 배경색 변경 로그 출력
        
        // 배경 이미지와 배경색을 동시에 변경
        document.body.style.backgroundColor = randomColor;  // 배경색 변경
        document.body.style.backgroundImage = "none"; // 배경 이미지 제거
    }
});




/*document.addEventListener("DOMContentLoaded", function() {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const loginBtn = document.getElementById("login-btn");
    const messageDiv = document.getElementById("message");
    const loginContainer = document.getElementById("login-container");
    const greetingDiv = document.getElementById("greeting");

    // 페이지 로드 시 로그인 상태 체크
    const loggedIn = localStorage.getItem("loggedIn") === "true";

    console.log("로그인 상태: ", loggedIn);

    if (loggedIn) {
        // 로그인 상태일 때 배경색 변경 및 메시지 표시
        changeBackgroundColor();
        messageDiv.textContent = "오늘 당신의 행운의 색깔!";
        
        // 로그인 창 숨기기
        loginContainer.style.display = "none";  // 로그인 창을 숨기기
    } else {
        // 로그인 상태가 아닐 때 로그인 창은 계속 보이게 합니다.
        loginContainer.style.display = "block";
        console.log("로그인 창 계속 보임");
    }

    // 로그인 버튼 클릭 시 동작
    loginBtn.addEventListener("click", function() {
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (username && password) {
            // 로그인 정보 로컬 스토리지에 저장
            localStorage.setItem("loggedIn", "true");
            console.log("로그인 정보 저장됨: ", localStorage.getItem("loggedIn"));

            // 배경색을 랜덤하게 변경
            changeBackgroundColor();

            // 메시지 표시
            messageDiv.textContent = "오늘 당신의 행운의 색깔!";

            // 로그인 창 숨기기
            loginContainer.style.display = "none";

            // 입력 필드 비우기
            usernameInput.value = '';
            passwordInput.value = '';
        } else {
            alert("사용자 이름과 비밀번호를 입력하세요.");
        }
    });

    // 랜덤한 색상으로 배경 변경 함수
    function changeBackgroundColor() {
        // 배경 이미지를 숨기기 (배경 이미지를 적용한 요소를 숨깁니다)
        document.body.style.backgroundImage = "none"; // 배경 이미지를 제거
        const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FFFF33"];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        console.log("배경색 변경: ", randomColor); // 배경색 확인
        document.body.style.backgroundColor = randomColor; // 배경색 변경
    }
});*/
