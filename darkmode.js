// 다크 모드를 토글하는 함수
function toggleDarkMode() {
	const isDark = document.body.classList.toggle("dark-mode");
	document.getElementById("button").innerHTML = isDark ? "Light" : "Dark";
	saveDarkModeState(isDark);
}


// 다크 모드 토글 상태를 저장하는 함수
function saveDarkModeState(isDarkMode) {
	localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
}

// 다크 모드 토글 상태를 불러오는 함수
function loadDarkModeState() {
	const saved = localStorage.getItem('darkMode');
	return saved ? JSON.parse(saved) : false;
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