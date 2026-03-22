const clock = document.getElementById("clock");
const dateEl = document.getElementById("date");
const button = document.getElementById("toggleTheme");
const body = document.body;
const clouds = document.querySelector(".clouds");

function updateTime() {
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  clock.textContent = `${hours}:${minutes}:${seconds}`;

  const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
  dateEl.textContent = now.toLocaleDateString('pt-BR', options);
}

setInterval(updateTime, 1000);
updateTime();

button.addEventListener("click", () => {
  const isDark = body.classList.contains("dark");

  body.classList.add("animating");

  clouds.style.display = "flex";

  setTimeout(() => {
    if (isDark) {
      body.classList.remove("dark");
      body.classList.add("light");
      button.textContent = "🌙";
    } else {
      body.classList.remove("light");
      body.classList.add("dark");
      button.textContent = "☀️";
    }
  }, 300);

  setTimeout(() => {
    body.classList.remove("animating");

    clouds.style.display = "none";
  }, 900);
});