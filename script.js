// 클릭 카운터
const countEl = document.getElementById("count");
let count = 0;
document.getElementById("counter-btn").addEventListener("click", () => {
  count += 1;
  countEl.textContent = count;
});

// 다크 모드 전환 (선택한 테마는 브라우저에 저장)
const toggle = document.getElementById("theme-toggle");
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  toggle.textContent = theme === "dark" ? "☀️" : "🌙";
}
let saved = null;
try { saved = localStorage.getItem("theme"); } catch (e) {}
applyTheme(saved || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
toggle.addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(next);
  try { localStorage.setItem("theme", next); } catch (e) {}
});

// 푸터 연도
document.getElementById("year").textContent = new Date().getFullYear();
