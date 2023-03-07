"use strict";

window.addEventListener("load", ready);

let indicatorsOff;
let points;
const MAX_POINTS = 20;

function ready() {
  console.log("Javascript ready");
  showStartScreen();
}

function startGame() {
  console.log("start");
  showGame();
  let audio = document.querySelector("#background_music");
  audio.currentTime = 0;
  audio.play();
  audio.volume = 0.3;
  resetIndicators();
  resetPoints();

  document
    .querySelector("#restart_button")
    .removeEventListener("click", startGame);
  document
    .querySelector("#start_button")
    .removeEventListener("click", startGame);

  startPositions();
  startAnimations();
  clickEvents();
  animationsReset();
  startTimer();
}

function startTimer() {
  console.log("Time started");
  document.querySelector("#time_slider").classList.add("squeeze");
  document
    .querySelector("#time_slider")
    .addEventListener("animationend", gameOver);
}

function transitionAnimation() {
  console.log("transitionAnimation");
  let btnSound = document.querySelector("#screen_button_sound");
  btnSound.currentTime = 0.18;
  btnSound.play();
  document.querySelector("#screen").classList.add("fade_in");
  document.querySelector("#screen").addEventListener("animationend", () => {
    document.querySelector("#screen").classList.remove("fade_in");
  });
}

function showStartScreen() {
  console.log("showStartScreen");
  document
    .querySelector("#goToStart_button")
    .removeEventListener("click", showStartScreen);
  document.querySelector("#game_ui").classList.add("hidden");
  document.querySelector("#game_elements").classList.add("hidden");
  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#level_complete").classList.add("hidden");
  document.querySelector("#start").classList.remove("hidden");
  document.querySelector("#start_button").addEventListener("click", startGame);
}

function showGame() {
  console.log("Showing game");
  transitionAnimation();
  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#level_complete").classList.add("hidden");
  document.querySelector("#start").classList.add("hidden");
  document.querySelector("#game_ui").classList.remove("hidden");
  document.querySelector("#game_elements").classList.remove("hidden");
}

function clickEvents() {
  console.log("Click events");
  //Registrering af click
  document
    .querySelector("#greenButton1_container")
    .addEventListener("mousedown", greenButtonClick);
  document
    .querySelector("#greenButton2_container")
    .addEventListener("mousedown", greenButtonClick);
  document
    .querySelector("#greenButton3_container")
    .addEventListener("mousedown", greenButtonClick);
  document
    .querySelector("#redButton1_container")
    .addEventListener("mousedown", redButtonClick);
  document
    .querySelector("#redButton2_container")
    .addEventListener("mousedown", redButtonClick);
  document
    .querySelector("#redButton3_container")
    .addEventListener("mousedown", redButtonClick);
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

function animationsReset() {
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

function resetIndicators() {
  console.log("Reset indicators");
  indicatorsOff = 3;
  document.querySelector("#indicator_red1").classList.remove("brighter");
  document.querySelector("#indicator_red2").classList.remove("brighter");
  document.querySelector("#indicator_red3").classList.remove("brighter");
}

function resetPoints() {
  console.log("Reset points");
  points = 0;
  updatePoints();
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
  transitionAnimation();
  removeAnimations();
  removeEvents();
  hideGame();
  document.querySelector("#background_music").pause();
  let audio = document.querySelector("#game_over_sound");
  audio.currentTime = 0;
  audio.volume = 0.3;
  audio.play();

  document.querySelector("#game_over").classList.remove("hidden");

  document
    .querySelector("#restart_button")
    .addEventListener("click", startGame);
}

function levelComplete() {
  console.log("Level Complete");
  transitionAnimation();
  removeAnimations();
  removeEvents();
  hideGame();
  document.querySelector("#background_music").pause();
  let audio = document.querySelector("#level_complete_sound");
  audio.currentTime = 0;
  audio.play();

  document.querySelector("#level_complete").classList.remove("hidden");

  document
    .querySelector("#goToStart_button")
    .addEventListener("click", showStartScreen);
  document.querySelector("#goToStart_button").addEventListener("click", () => {
    transitionAnimation();
  });
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

  document.querySelector("#time_slider").classList.remove("squeeze");
}

function removeEvents() {
  console.log("Removed click events");
  document
    .querySelector("#greenButton1_container")
    .removeEventListener("click", redButtonClick);
  document
    .querySelector("#greenButton2_container")
    .removeEventListener("click", redButtonClick);
  document
    .querySelector("#greenButton3_container")
    .removeEventListener("click", redButtonClick);
  document
    .querySelector("#redButton1_container")
    .removeEventListener("click", redButtonClick);
  document
    .querySelector("#redButton2_container")
    .removeEventListener("click", redButtonClick);
  document
    .querySelector("#redButton3_container")
    .removeEventListener("click", redButtonClick);
  document
    .querySelector("#time_slider")
    .addEventListener("animationend", gameOver);
}

function hideGame() {
  console.log("Hide game");
  document.querySelector("#game_elements").classList.add("hidden");
  document.querySelector("#game_ui").classList.add("hidden");
}

function greenButtonClick() {
  console.log("greenButtonClick");
  let audio = document.querySelector("#green_button_sound");
  audio.currentTime = 0;
  audio.volume = 0.8;
  audio.play();

  addPoint();

  const button = this;
  button.removeEventListener("mousedown", greenButtonClick);
  button.classList.add("paused");
  button.querySelector("img").classList.add("fade_out");
  button.addEventListener("animationend", greenButtonGone);
}

function greenButtonGone() {
  console.log("greenButtonGone");
  const button = this;

  button.removeEventListener("animationend", greenButtonGone);
  button.querySelector("img").classList.remove("fade_out");
  button.classList.remove("paused");

  buttonReset.call(this);

  button.addEventListener("mousedown", greenButtonClick);
}

function redButtonClick() {
  console.log("redbuttonClick");
  let audio = document.querySelector("#red_button_sound");
  audio.currentTime = 0;
  audio.volume = 0.8;
  audio.play();

  lightNextIndicator();

  const button = this;
  button.removeEventListener("mousedown", redButtonClick);
  button.classList.add("paused");
  button.querySelector("img").classList.add("fade_out");
  button.addEventListener("animationend", redButtonGone);
}

function redButtonGone() {
  console.log("redButtonGone");
  const button = this;

  button.removeEventListener("animationend", redButtonGone);
  button.querySelector("img").classList.remove("fade_out");
  button.classList.remove("paused");

  buttonReset.call(this);

  button.addEventListener("mousedown", redButtonClick);
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
