const smile = document.getElementById("tmg-smile");
const sadSmile = document.getElementById("tmg-sadSmile");
const bigSmile = document.getElementById("tmg-bigSmile");

setInterval(() => {
  const el = document.getElementById("tmg");
  const { clientWidth, clientHeight } = el;
  el.style.width = `calc(${clientWidth}px - 5px)`;
}, 5000);

let feeder = function() {
  const el = document.getElementById("tmg");
  const { clientWidth, clientHeight } = el;
  el.style.width = `calc(${clientWidth}px + 5px)`;

  tmgDisplayNone()
  smile.style.display = "block";
};

let player = function() {
  tmgDisplayNone()
  bigSmile.style.display = "block";

  setTimeout(() => {
    tmgDisplayNone()
    smile.style.display = "block";
  }, 7000);
};

let punisher = function() {
  tmgDisplayNone()
  sadSmile.style.display = "block";
};

let tmgDisplayNone = function () {
  smile.style.display = "none";
  sadSmile.style.display = "none";
  bigSmile.style.display = "none";
};

document.getElementById("feed").addEventListener("click", feeder);
document.getElementById("play").addEventListener("click", player);
document.getElementById("panish").addEventListener("click", punisher);
