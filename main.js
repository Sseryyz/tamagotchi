const smile = document.getElementById("tmg-smile");
const sadSmile = document.getElementById("tmg-sadSmile");
const bigSmile = document.getElementById("tmg-bigSmile");

let feeder = function() {
  const el = document.getElementById("tmg");
  const { clientWidth, clientHeight } = el;
  el.style.width = `calc(${clientWidth}px + 5px)`;
};

let player = function() {
  smile.style.display = "none";
  bigSmile.style.display = "block";
  setInterval(smileFace, 5000)
};
let punisher = function() {

};
let smileFace = function () {
  smile.style.display = "block";
  bigSmile.style.display = "none";
}
document.getElementById("feed").addEventListener("click", feeder);
document.getElementById("play").addEventListener("click", player);
document.getElementById("panish").addEventListener("click", punisher);
