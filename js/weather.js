const API_KEY = "8e2a57ee0fed148595f5adddbc3b0108";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("당신이 있는 곳은?", lat, lon);
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");

        // 도시 이름
        city.innerText = data.name;
        // 날씨 상태
        weather.innerText = data.weather[0].main;  // 'weather'를 올바르게 수정
    })
    .catch(error => console.error("날씨 정보를 가져오는 중에 오류가 발생했습니다.", error));
}

function onGeoError() {
    alert("당신을 찾을 수 없습니다. 날씨를 알려드릴 수 없어요ㅠㅠ");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);