window.addEventListener("load", start);

function start() {
  console.log("start");
  document
    .querySelector("#greenButton1_container")
    .addEventListener("click", greenbutton1PauseAndFadeOut);
  document
    .querySelector("#greenButton1_container")
    .addEventListener("animationend", greenButton1Reset);
  document
    .querySelector("#redButton1_container")
    .addEventListener("click", redbutton1PauseAndFadeOut);
  document
    .querySelector("#redButton1_container")
    .addEventListener("animationend", redButton1Reset);
}

function greenbutton1PauseAndFadeOut() {
  console.log("greenbutton1PauseAndFadeOut");
  document.querySelector("#greenButton1_container").classList.add("paused");
  document.querySelector("#greenButton1_sprite").classList.add("fade_out");
}
function greenButton1Reset() {
  console.log("greenButton1Reset");
  document.querySelector("#greenButton1_container").classList.remove("paused");
  document.querySelector("#greenButton1_sprite").classList.remove("fade_out");
  document.querySelector("#greenButton1_container").classList.remove("rising");
  document.querySelector("#greenButton1_container").offsetHeight;
  document.querySelector("#greenButton1_container").classList.add("rising");
}
function redbutton1PauseAndFadeOut() {
  console.log("redbutton1PauseAndFadeOut");
  document.querySelector("#redButton1_container").classList.add("paused");
  document.querySelector("#redButton1_sprite").classList.add("fade_out");
}
function redButton1Reset() {
  console.log("redButton1Reset");
  document.querySelector("#redButton1_container").classList.remove("paused");
  document.querySelector("#redButton1_sprite").classList.remove("fade_out");
  document.querySelector("#redButton1_container").classList.remove("rising");
  document.querySelector("#redButton1_container").offsetHeight;
  document.querySelector("#redButton1_container").classList.add("rising");
}
