const clock = document.getElementById("clock");
const dateEl = document.getElementById("date");
const button = document.getElementById("toggleTheme");
const body = document.body;

// Atualiza hora e data
function updateTime() {
  const now = new Date();

  // Hora
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  clock.textContent = `${hours}:${minutes}:${seconds}`;

  // Data
  const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
  const formattedDate = now.toLocaleDateString('pt-BR', options);

  dateEl.textContent = formattedDate;
}

// Atualiza a cada segundo
setInterval(updateTime, 1000);
updateTime();

// Alternar tema
button.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");

  // Trocar ícone
  if (body.classList.contains("dark")) {
    button.textContent = "☀️";
  } else {
    button.textContent = "🌙";
  }
});