"use strict";

window.addEventListener("load", ready);

let indicatorsOff = 3;
let points = 0;
const MAX_POINTS = 3;

function ready() {
  console.log("Javascript ready");
  document.querySelector("#game_ui").classList.add("hidden");
  document.querySelector("#start_button").addEventListener("click", start);
}

function start() {
  console.log("start");
  document.querySelector("#start").classList.add("hidden");
  document.querySelector("#game_ui").classList.remove("hidden");

  startPositions();
  startAnimations();
  clickEvents();
  resetAnimations();
}

function clickEvents() {
  console.log("Click events");
  //Registrering af click
  document
    .querySelector("#greenButton1_container")
    .addEventListener("click", greenButtonClick);
  document
    .querySelector("#greenButton2_container")
    .addEventListener("click", greenButtonClick);
  document
    .querySelector("#greenButton3_container")
    .addEventListener("click", greenButtonClick);
  document
    .querySelector("#redButton1_container")
    .addEventListener("click", redButtonClick);
  document
    .querySelector("#redButton2_container")
    .addEventListener("click", redButtonClick);
  document
    .querySelector("#redButton3_container")
    .addEventListener("click", redButtonClick);
}
function resetAnimations() {
  console.log("Reset animations");
  //Hvad der skal ske når animationen slutter
  document
    .querySelector("#greenButton1_container")
    .addEventListener("animationiteration", buttonReset);
  document
    .querySelector("#greenButton2_container")
    .addEventListener("animationiteration", buttonReset);
  document
    .querySelector("#greenButton3_container")
    .addEventListener("animationiteration", buttonReset);
  document
    .querySelector("#redButton1_container")
    .addEventListener("animationiteration", buttonReset);
  document
    .querySelector("#redButton2_container")
    .addEventListener("animationiteration", buttonReset);
  document
    .querySelector("#redButton3_container")
    .addEventListener("animationiteration", buttonReset);
}

function startAnimations() {
  console.log("Start animations");
  document
    .querySelector("#greenButton1_container")
    .classList.add("rise_and_fall1");
  document
    .querySelector("#greenButton2_container")
    .classList.add("rise_and_fall2");
  document
    .querySelector("#greenButton3_container")
    .classList.add("rise_and_fall3");
  document
    .querySelector("#redButton1_container")
    .classList.add("rise_and_fall3");
  document
    .querySelector("#redButton2_container")
    .classList.add("rise_and_fall2");
  document
    .querySelector("#redButton3_container")
    .classList.add("rise_and_fall1");
}
function startPositions() {
  console.log("Start positions");
  document.querySelector("#greenButton1_container").classList.add("position1");
  document.querySelector("#greenButton2_container").classList.add("position3");
  document.querySelector("#greenButton3_container").classList.add("position6");
  document.querySelector("#redButton1_container").classList.add("position2");
  document.querySelector("#redButton2_container").classList.add("position4");
  document.querySelector("#redButton3_container").classList.add("position5");
}

function gameOver() {
  console.log("Game Over");
  removeAnimations();
  let audio = document.querySelector("#game_over_sound");
  audio.currentTime = 0;
  audio.volume = 0.3;
  audio.play();

  document.querySelector("#game_over").classList.remove("hidden");
}
function levelComplete() {
  console.log("Level Complete");
  removeAnimations();
  let audio = document.querySelector("#level_complete_sound");
  audio.currentTime = 0;
  audio.play();

  document.querySelector("#level_complete").classList.remove("hidden");
}

//Fjerner animationer samt skjuler spil-elementer og -ui
function removeAnimations() {
  console.log("Removed animations");
  document
    .querySelector("#greenButton1_container")
    .classList.remove("rise_and_fall1", "rise_and_fall2", "rise_and_fall3");
  document
    .querySelector("#greenButton2_container")
    .classList.remove("rise_and_fall1", "rise_and_fall2", "rise_and_fall3");
  document
    .querySelector("#greenButton3_container")
    .classList.remove("rise_and_fall1", "rise_and_fall2", "rise_and_fall3");
  document
    .querySelector("#redButton1_container")
    .classList.remove("rise_and_fall1", "rise_and_fall2", "rise_and_fall3");
  document
    .querySelector("#redButton2_container")
    .classList.remove("rise_and_fall1", "rise_and_fall2", "rise_and_fall3");
  document
    .querySelector("#redButton3_container")
    .classList.remove("rise_and_fall1", "rise_and_fall2", "rise_and_fall3");

  document.querySelector("#game_elements").classList.add("hidden");
  document.querySelector("#game_ui").classList.add("hidden");
}

function greenButtonClick() {
  console.log("greenButtonClick");
  let audio = document.querySelector("#green_button_sound");
  audio.currentTime = 0;
  audio.play();

  const button = this;
  button.removeEventListener("click", greenButtonClick);
  button.classList.add("paused");
  button.querySelector("img").classList.add("fade_out");
  button.addEventListener("animationend", greenButtonGone);
  button.addEventListener("animationend", addPoint);
}
function greenButtonGone() {
  console.log("greenButtonGone");
  const button = this;

  button.removeEventListener("animationend", greenButtonGone);
  button.querySelector("img").classList.remove("fade_out");
  button.classList.remove("paused");

  buttonReset.call(this);

  button.addEventListener("click", greenButtonClick);
}

function redButtonClick() {
  console.log("redbuttonClick");
  let audio = document.querySelector("#red_button_sound");
  audio.currentTime = 0;
  audio.play();

  const button = this;
  button.removeEventListener("click", redButtonClick);
  button.classList.add("paused");
  button.querySelector("img").classList.add("fade_out");
  button.addEventListener("animationend", redButtonGone);
  button.addEventListener("animationend", lightNextIndicator);
}
function redButtonGone() {
  console.log("redButtonGone");
  const button = this;

  button.removeEventListener("animationend", redButtonGone);
  button.querySelector("img").classList.remove("fade_out");
  button.classList.remove("paused");

  buttonReset.call(this);

  button.addEventListener("click", redButtonClick);
}

function buttonReset() {
  console.log("buttonReset");
  const button = this;

  button.classList.remove("rise_and_fall1", "rise_and_fall2", "rise_and_fall3");
  button.offsetHeight;
  button.classList.add("rise_and_fall1");

  button.classList.remove(
    "position1",
    "position2",
    "position3",
    "position4",
    "position5",
    "position6"
  );

  const n = Math.ceil(Math.random() * 6);
  button.classList.add("position" + n);
}

function addPoint() {
  console.log("addPoint");
  points++;
  updatePoints();
  if (points == MAX_POINTS) {
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
  //Så man har sidste forsøg når alle indikatorer er lyst op
  if (indicatorsOff < 0) {
    gameOver();
  }
}
function updateIndicators() {
  console.log("updateIndicators");
  //For at den ikke prøver at indsætte 0 i navnet
  if (indicatorsOff > 0) {
    document
      .querySelector("#indicator_red" + indicatorsOff)
      .classList.add("brighter");
  }
}
