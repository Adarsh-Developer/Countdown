// Deciding the last date of the countdown...
const userInput = document.querySelector('.user__input-date')

// Count down code
const inputTime = document.querySelectorAll(".countdown__details input");
function clock() {
  const end = new Date(userInput.value);
  const now = new Date();
  const diff = (end - now) / 1000;

  if (diff < 0) return;

  inputTime[0].value = Math.floor(diff / 3600 / 24);
  inputTime[1].value = Math.floor(diff / 3600) % 24;
  inputTime[2].value = Math.floor(diff / 60) % 60;
  inputTime[3].value = Math.floor(diff) % 60;
}

const button = document.querySelector("button");
button.addEventListener("click", function () {
  setInterval(() => clock(), 1000);
  console.log(userInput.value);
});
