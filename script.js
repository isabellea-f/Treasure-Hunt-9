// Räknare
let foundCount = 0;
let time = 0;
let timer;

// Hämta HUD-element
const foundCountEl = document.getElementById("foundCount");
const timerEl = document.getElementById("timer");

// Starta timern
timer = setInterval(() => {
  time++;
  timerEl.textContent = time;
}, 1000);

// --- Här ska ni lägga in era egna skatter --- //
// Exempel: skatt 1
/* const treasure1 = document.getElementById("treasure1"); */

// ... fortsätt för alla skatter ...
const treasures = document.querySelectorAll(".treasure");

treasures.forEach((treasure) => {
  treasure.addEventListener("click", () => {
    if (!treasure.classList.contains("found")) {
      treasure.classList.add("found"); // markerar att den är hittad
      foundCount++;
      foundCountEl.textContent = foundCount;

      alert("Grattis! Du hittade en skatt! 🎉");

      if (foundCount === 10) {
        clearInterval(timer);
        alert("Alla skatter hittade på " + time + " sekunder!");
      }
    }
  });
});

const bonusTreasure = document.querySelector("#bonus-treasure");
const welcomeText = document.querySelector("#treasure7");

bonusTreasure.addEventListener("click", () => {
  const pink = (document.body.style.background = "#f694c1");
  const purple = (document.querySelector("nav").style.background = "#e4c1f9");
  welcomeText.textContent = "Du hittade bonusskatten!";

  welcomeText.classList.add("flash");
  setTimeout(() => {
    welcomeText.classList.remove("flash");
  }, 3000);
});
