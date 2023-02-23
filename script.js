"user strict";

window.addEventListener("load", start);

let lightsOFF = 3;
let points = 0;

function start() {
  console.log("start");

  document.querySelector("#greenButton1_container").classList.add("rising");
  document.querySelector("#redButton1_container").classList.add("rising");

  document
    .querySelector("#greenButton1_container")
    .addEventListener("click", greenbuttonClick);
  document
    .querySelector("#redButton1_container")
    .addEventListener("click", redbuttonClick);
}

function gameOver() {
  console.log("Game Over");
  removeAnimations();
  document.querySelector("#game_over").classList.remove("hidden");
}
function levelComplete() {
  console.log("Level Complete");
  removeAnimations();
  document.querySelector("#level_complete").classList.remove("hidden");
}

function removeAnimations() {
  console.log("Removed animations and event listeners");
  document.querySelector("#greenButton1_container").classList.remove("rising");
  document.querySelector("#redButton1_container").classList.remove("rising");
  document
    .querySelector("#greenButton1_container")
    .removeEventListener("click", greenbuttonClick);
  document
    .querySelector("#redButton1_container")
    .removeEventListener("click", redbuttonClick);
}

function addPoint() {
  console.log("addPoint");
  points++;
  updatePoints();
}
function updatePoints() {
  console.log("updatePoints");
  document.querySelector("#counter").textContent = points;
}

function lightNextIndicator() {
  console.log("lightNextIndicator");
  updateIndicators();
  lightsOFF--;
}
function updateIndicators() {
  console.log("updateIndicators");
  document
    .querySelector("#indicator_red" + lightsOFF)
    .classList.add("brighter");
}

function greenbuttonClick() {
  console.log("greenbuttonClick");
  document
    .querySelector("#greenButton1_container")
    .removeEventListener("click", greenbuttonClick);
  document.querySelector("#greenButton1_container").classList.add("paused");
  document.querySelector("#greenButton1_sprite").classList.add("fade_out");
  document
    .querySelector("#greenButton1_container")
    .addEventListener("animationend", greenButtonReset);
  addPoint();
}
function greenButtonReset() {
  console.log("greenButtonReset");
  document.querySelector("#greenButton1_container").classList.remove("paused");
  document.querySelector("#greenButton1_sprite").classList.remove("fade_out");
  document.querySelector("#greenButton1_container").classList.remove("rising");
  document.querySelector("#greenButton1_container").offsetHeight;
  document.querySelector("#greenButton1_container").classList.add("rising");
  document
    .querySelector("#greenButton1_container")
    .addEventListener("click", greenbuttonClick);
}

function redbuttonClick() {
  console.log("redbutton1PauseAndFadeOut");
  document
    .querySelector("#redButton1_container")
    .removeEventListener("click", redbuttonClick);
  document.querySelector("#redButton1_container").classList.add("paused");
  document.querySelector("#redButton1_sprite").classList.add("fade_out");
  document
    .querySelector("#redButton1_container")
    .addEventListener("animationend", redButtonReset);
  lightNextIndicator();
}
function redButtonReset() {
  console.log("redButton1Reset");
  document.querySelector("#redButton1_container").classList.remove("paused");
  document.querySelector("#redButton1_sprite").classList.remove("fade_out");
  document.querySelector("#redButton1_container").classList.remove("rising");
  document.querySelector("#redButton1_container").offsetHeight;
  document.querySelector("#redButton1_container").classList.add("rising");
  document
    .querySelector("#redButton1_container")
    .addEventListener("click", redbuttonClick);
}
