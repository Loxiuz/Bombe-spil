"use strict";

window.addEventListener("load", start);

let indicatorsOff = 3;
let points = 0;

function start() {
  console.log("start");

  document.querySelector("#greenButton1_container").classList.add("rising");
  document.querySelector("#greenButton2_container").classList.add("rising");
  document.querySelector("#greenButton3_container").classList.add("rising");
  document.querySelector("#redButton1_container").classList.add("rising");
  document.querySelector("#redButton2_container").classList.add("rising");
  document.querySelector("#redButton3_container").classList.add("rising");

  document
    .querySelector("#greenButton1_container")
    .addEventListener("click", greenButtonClick);
  document
    .querySelector("#redButton1_container")
    .addEventListener("click", redButtonClick);
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

//Removes animations and hides game elements and game ui.
function removeAnimations() {
  console.log("Removed animations and event listeners");
  document.querySelector("#greenButton1_container").classList.remove("rising");
  document.querySelector("#greenButton2_container").classList.remove("rising");
  document.querySelector("#greenButton3_container").classList.remove("rising");
  document.querySelector("#redButton1_container").classList.remove("rising");
  document.querySelector("#redButton2_container").classList.remove("rising");
  document.querySelector("#redButton3_container").classList.remove("rising");

  document
    .querySelector("#greenButton1_container")
    .removeEventListener("click", greenButtonClick);
  document
    .querySelector("#greenButton1_container")
    .removeEventListener("animationend", greenButtonReset);
  document
    .querySelector("#redButton1_container")
    .removeEventListener("click", redButtonClick);
  document
    .querySelector("#redButton1_container")
    .removeEventListener("animationend", redButtonReset);

  document.querySelector("#game_elements").classList.add("hidden");
  document.querySelector("#game_ui").classList.add("hidden");
}

function addPoint() {
  console.log("addPoint");
  points++;
  updatePoints();
  if (points == 10) {
    levelComplete();
  }
}
function updatePoints() {
  console.log("updatePoints");
  document.querySelector("#counter").textContent = points;
}

function lightNextIndicator() {
  console.log("lightNextIndicator");
  updateIndicators();
  indicatorsOff--;
  if (indicatorsOff == 0) {
    gameOver();
  }
}
function updateIndicators() {
  console.log("updateIndicators");
  document
    .querySelector("#indicator_red" + indicatorsOff)
    .classList.add("brighter");
}

function greenButtonClick() {
  console.log("greenbuttonClick");
  document
    .querySelector("#greenButton1_container")
    .removeEventListener("click", greenButtonClick);
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
    .addEventListener("click", greenButtonClick);
}

function redButtonClick() {
  console.log("redbuttonClick");
  document
    .querySelector("#redButton1_container")
    .removeEventListener("click", redButtonClick);
  document.querySelector("#redButton1_container").classList.add("paused");
  document.querySelector("#redButton1_sprite").classList.add("fade_out");
  document
    .querySelector("#redButton1_container")
    .addEventListener("animationend", redButtonReset);
  lightNextIndicator();
}
function redButtonReset() {
  console.log("redButtonReset");
  document.querySelector("#redButton1_container").classList.remove("paused");
  document.querySelector("#redButton1_sprite").classList.remove("fade_out");
  document.querySelector("#redButton1_container").classList.remove("rising");
  document.querySelector("#redButton1_container").offsetHeight;
  document.querySelector("#redButton1_container").classList.add("rising");
  document
    .querySelector("#redButton1_container")
    .addEventListener("click", redButtonClick);
}
