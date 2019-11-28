const smile = document.getElementById("tmg-smile");
const sadSmile = document.getElementById("tmg-sadSmile");
const bigSmile = document.getElementById("tmg-bigSmile");
const fartSmile = document.getElementById("tmg-fartSmile");

const el = document.getElementById("tmg");

let years = 0;

setInterval( () => {
  years++;
}, 10000);

setInterval(() => {
  el.style.width = `calc(${el.clientWidth}px - 1px)`;
  status();
  health();
  weight();
  age();
  }, 1000);

let tmgDisplayNone = function () {
  smile.style.display = "none";
  sadSmile.style.display = "none";
  bigSmile.style.display = "none";
  fartSmile.style.display = "none";
};

let overeaten = function () {
  if (el.clientWidth > 250) {
    tmgDisplayNone()
    fartSmile.style.display = "block";
  } else {
    tmgDisplayNone();
    smile.style.display = "block";
  }
};

let feeder = function() {
  el.style.width = `calc(${el.clientWidth}px + 10px)`;
  tmgDisplayNone()
  smile.style.display = "block";
  setInterval( () => {
    overeaten();
  },10000);
};

let player = function() {
  tmgDisplayNone()
  bigSmile.style.display = "block";
  setTimeout( () => {
    tmgDisplayNone();
    smile.style.display = "block";
    },3000);
};

let punisher = function() {
  tmgDisplayNone()
  sadSmile.style.display = "block";
};

let status = function () {
  if (el.clientWidth < 180) {
    document.getElementById("fed-up").style.display = "none";
    document.getElementById("hungry").style.display = "inline-block";
  } else {
    document.getElementById("fed-up").style.display = "inline-block";
    document.getElementById("hungry").style.display = "none";
  }
};

let health = function () {
  document.getElementById("healthy").style.display = "inline-block";

  if ((el.clientWidth < 150) || (el.clientWidth > 270)) {
    document.getElementById("healthy").style.display = "none";
    document.getElementById("ill").style.display = "inline-block";
  } else document.getElementById("ill").style.display = "none";
};

let weight = function () {
  document.getElementById("weight").textContent = "Weight: " + el.clientWidth + "kg";
};

let age = function () {
  document.getElementById("age").textContent = "Age: " + years;
};

document.getElementById("feed").addEventListener("click", feeder);
document.getElementById("play").addEventListener("click", player);
document.getElementById("panish").addEventListener("click", punisher);