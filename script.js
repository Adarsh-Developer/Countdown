// Deciding the last date of the countdown...
const userInput = document.querySelector(".user__input-date");
let end;

// Count down code
const inputTime = document.querySelectorAll(".countdown__details input");
function clock() {
  const now = new Date();
  const diff = (end - now) / 1000;

  if (diff <= 0 || isNaN(diff)) return;

  inputTime[1].value = Math.floor(diff / 3600) % 24;
  inputTime[0].value = Math.floor(diff / 3600 / 24);
  inputTime[2].value = Math.floor(diff / 60) % 60;
  inputTime[3].value = Math.floor(diff) % 60;
}

const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

let start;
function startInterval(){
  start = setInterval(() => clock(), 1000);
}
function stopInterval(){
  clearInterval(start)
}

startBtn.addEventListener("click", function () {
  end = new Date(userInput.value);
  startInterval()
});
stopBtn.addEventListener("click", function () {
  stopInterval()
});

resetBtn.addEventListener("click", function () {
  stopInterval()
  if (userInput.value !== 0) {
    userInput.value = "";
    inputTime[1].value = 0;
    inputTime[0].value = 0;
    inputTime[2].value = 0;
    inputTime[3].value = 0;
  }
});
