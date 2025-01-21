// 다크 모드를 토글하는 함수
function toggleDarkMode() {
	var btn = document.getElementById("button");
	document.body.classList.toggle("dark-mode");
	if (btn.innerHTML === "Dark") {
		btn.innerHTML = "Light";
		saveDarkModeState(true); // 다크 모드가 켜진 상태를 저장
	} else {
		btn.innerHTML = "Dark";
		saveDarkModeState(false); // 다크 모드가 꺼진 상태를 저장
	}
}

// 다크 모드 토글 상태를 저장하는 함수
function saveDarkModeState(isDarkMode) {
	localStorage.setItem('darkMode', isDarkMode);
}

// 다크 모드 토글 상태를 불러오는 함수
function loadDarkModeState() {
	return JSON.parse(localStorage.getItem('darkMode'));
}


// 페이지가 로드될 때 실행되는 함수
window.onload = function() {
	// 웹 스토리지에서 다크 모드 토글 상태를 불러옴
	var isDarkMode = loadDarkModeState();

	// 만약 다크 모드 토글 상태가 true이면 다크 모드를 적용
	if (isDarkMode) {
		document.body.classList.add("dark-mode");
		document.getElementById("button").innerHTML = "Light";
	}
};