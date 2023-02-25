"user strict";

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
    .addEventListener("click", greenButton1Click);
  document
    .querySelector("#greenButton2_container")
    .addEventListener("click", greenButton2Click);
  document
    .querySelector("#greenButton3_container")
    .addEventListener("click", greenButton3Click);
  document
    .querySelector("#redButton1_container")
    .addEventListener("click", redButton1Click);
  document
    .querySelector("#redButton2_container")
    .addEventListener("click", redButton2Click);
  document
    .querySelector("#redButton3_container")
    .addEventListener("click", redButton3Click);
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
  //---Green button 1---//
  document
    .querySelector("#greenButton1_container")
    .removeEventListener("click", greenButton1Click);
  document
    .querySelector("#greenButton1_container")
    .removeEventListener("animationend", greenButton1Reset);
  //---Green button 2---//
  document
    .querySelector("#greenButton2_container")
    .removeEventListener("click", greenButton2Click);
  document
    .querySelector("#greenButton2_container")
    .removeEventListener("animationend", greenButton2Reset);
  //---Green button 3---//
  document
    .querySelector("#greenButton3_container")
    .removeEventListener("click", greenButton3Click);
  document
    .querySelector("#greenButton3_container")
    .removeEventListener("animationend", greenButton3Reset);
  //---Red button 1---//
  document
    .querySelector("#redButton1_container")
    .removeEventListener("click", redButton1Click);
  document
    .querySelector("#redButton1_container")
    .removeEventListener("animationend", redButton1Reset);
  //---Red button 2---//
  document
    .querySelector("#redButton2_container")
    .removeEventListener("click", redButton2Click);
  document
    .querySelector("#redButton2_container")
    .removeEventListener("animationend", redButton2Reset);
  //---Red button 3---//
  document
    .querySelector("#redButton3_container")
    .removeEventListener("click", redButton3Click);
  document
    .querySelector("#redButton3_container")
    .removeEventListener("animationend", redButton3Reset);

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
//---Green button 1---//
function greenButton1Click() {
  console.log("greenbutton1Click");
  document
    .querySelector("#greenButton1_container")
    .removeEventListener("click", greenButton1Click);
  document.querySelector("#greenButton1_container").classList.add("paused");
  document.querySelector("#greenButton1_sprite").classList.add("fade_out");
  document
    .querySelector("#greenButton1_container")
    .addEventListener("animationend", greenButton1Reset);
  addPoint();
}
function greenButton1Reset() {
  console.log("greenButton1Reset");
  document.querySelector("#greenButton1_container").classList.remove("paused");
  document.querySelector("#greenButton1_sprite").classList.remove("fade_out");
  document.querySelector("#greenButton1_container").classList.remove("rising");
  document.querySelector("#greenButton1_container").offsetHeight;
  document.querySelector("#greenButton1_container").classList.add("rising");
  document
    .querySelector("#greenButton1_container")
    .addEventListener("click", greenButton1Click);
}
//---Green button 2---//
function greenButton2Click() {
  console.log("greenbutton2Click");
  document
    .querySelector("#greenButton2_container")
    .removeEventListener("click", greenButton2Click);
  document.querySelector("#greenButton2_container").classList.add("paused");
  document.querySelector("#greenButton2_sprite").classList.add("fade_out");
  document
    .querySelector("#greenButton2_container")
    .addEventListener("animationend", greenButton2Reset);
  addPoint();
}
function greenButton2Reset() {
  console.log("greenButton2Reset");
  document.querySelector("#greenButton2_container").classList.remove("paused");
  document.querySelector("#greenButton2_sprite").classList.remove("fade_out");
  document.querySelector("#greenButton2_container").classList.remove("rising");
  document.querySelector("#greenButton2_container").offsetHeight;
  document.querySelector("#greenButton2_container").classList.add("rising");
  document
    .querySelector("#greenButton2_container")
    .addEventListener("click", greenButton2Click);
}
//---Green button 3---//
function greenButton3Click() {
  console.log("greenbutton3Click");
  document
    .querySelector("#greenButton3_container")
    .removeEventListener("click", greenButton3Click);
  document.querySelector("#greenButton3_container").classList.add("paused");
  document.querySelector("#greenButton3_sprite").classList.add("fade_out");
  document
    .querySelector("#greenButton3_container")
    .addEventListener("animationend", greenButton3Reset);
  addPoint();
}
function greenButton3Reset() {
  console.log("greenButton3Reset");
  document.querySelector("#greenButton3_container").classList.remove("paused");
  document.querySelector("#greenButton3_sprite").classList.remove("fade_out");
  document.querySelector("#greenButton3_container").classList.remove("rising");
  document.querySelector("#greenButton3_container").offsetHeight;
  document.querySelector("#greenButton3_container").classList.add("rising");
  document
    .querySelector("#greenButton3_container")
    .addEventListener("click", greenButton3Click);
}
//---Red button 1---//
function redButton1Click() {
  console.log("redbutton1Click");
  document
    .querySelector("#redButton1_container")
    .removeEventListener("click", redButton1Click);
  document.querySelector("#redButton1_container").classList.add("paused");
  document.querySelector("#redButton1_sprite").classList.add("fade_out");
  document
    .querySelector("#redButton1_container")
    .addEventListener("animationend", redButton1Reset);
  lightNextIndicator();
}
function redButton1Reset() {
  console.log("redButton1Reset");
  document.querySelector("#redButton1_container").classList.remove("paused");
  document.querySelector("#redButton1_sprite").classList.remove("fade_out");
  document.querySelector("#redButton1_container").classList.remove("rising");
  document.querySelector("#redButton1_container").offsetHeight;
  document.querySelector("#redButton1_container").classList.add("rising");
  document
    .querySelector("#redButton1_container")
    .addEventListener("click", redButton1Click);
}
//---Red button 2---//
function redButton2Click() {
  console.log("redbutton2Click");
  document
    .querySelector("#redButton2_container")
    .removeEventListener("click", redButton2Click);
  document.querySelector("#redButton2_container").classList.add("paused");
  document.querySelector("#redButton2_sprite").classList.add("fade_out");
  document
    .querySelector("#redButton2_container")
    .addEventListener("animationend", redButton2Reset);
  lightNextIndicator();
}
function redButton2Reset() {
  console.log("redButton2Reset");
  document.querySelector("#redButton2_container").classList.remove("paused");
  document.querySelector("#redButton2_sprite").classList.remove("fade_out");
  document.querySelector("#redButton2_container").classList.remove("rising");
  document.querySelector("#redButton2_container").offsetHeight;
  document.querySelector("#redButton2_container").classList.add("rising");
  document
    .querySelector("#redButton2_container")
    .addEventListener("click", redButton2Click);
}
//---Red button 3---//
function redButton3Click() {
  console.log("redbutton3Click");
  document
    .querySelector("#redButton3_container")
    .removeEventListener("click", redButton3Click);
  document.querySelector("#redButton3_container").classList.add("paused");
  document.querySelector("#redButton3_sprite").classList.add("fade_out");
  document
    .querySelector("#redButton3_container")
    .addEventListener("animationend", redButton3Reset);
  lightNextIndicator();
}
function redButton3Reset() {
  console.log("redButton3Reset");
  document.querySelector("#redButton3_container").classList.remove("paused");
  document.querySelector("#redButton3_sprite").classList.remove("fade_out");
  document.querySelector("#redButton3_container").classList.remove("rising");
  document.querySelector("#redButton3_container").offsetHeight;
  document.querySelector("#redButton3_container").classList.add("rising");
  document
    .querySelector("#redButton3_container")
    .addEventListener("click", redButton3Click);
}
