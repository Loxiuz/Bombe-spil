"user strict";

window.addEventListener("load", start);

let activeLights = 3;
let points = 0;

function start() {
  console.log("start");
  document
    .querySelector("#greenButton1_container")
    .addEventListener("click", greenbuttonClick);
  document
    .querySelector("#greenButton1_container")
    .addEventListener("animationend", greenButtonReset);
  document
    .querySelector("#redButton1_container")
    .addEventListener("click", redbuttonClick);
  document
    .querySelector("#redButton1_container")
    .addEventListener("animationend", redButtonReset);
}

function greenbuttonClick() {
  console.log("greenbuttonClick");
  document.querySelector("#greenButton1_container").classList.add("paused");
  document.querySelector("#greenButton1_sprite").classList.add("fade_out");
  addPoint();
}
function greenButtonReset() {
  console.log("greenButtonReset");
  document.querySelector("#greenButton1_container").classList.remove("paused");
  document.querySelector("#greenButton1_sprite").classList.remove("fade_out");
  document.querySelector("#greenButton1_container").classList.remove("rising");
  document.querySelector("#greenButton1_container").offsetHeight;
  document.querySelector("#greenButton1_container").classList.add("rising");
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

function redbuttonClick() {
  console.log("redbutton1PauseAndFadeOut");
  document.querySelector("#redButton1_container").classList.add("paused");
  document.querySelector("#redButton1_sprite").classList.add("fade_out");
  lightNextIndicator();
}
function redButtonReset() {
  console.log("redButton1Reset");
  document.querySelector("#redButton1_container").classList.remove("paused");
  document.querySelector("#redButton1_sprite").classList.remove("fade_out");
  document.querySelector("#redButton1_container").classList.remove("rising");
  document.querySelector("#redButton1_container").offsetHeight;
  document.querySelector("#redButton1_container").classList.add("rising");
}
function lightNextIndicator() {
  console.log("lightNextIndicator");
  updateIndicators();
  activeLights--;
}
function updateIndicators() {
  console.log("updateIndicators");
  document
    .querySelector("#indicator_red" + activeLights)
    .classList.add("brighter");
}
