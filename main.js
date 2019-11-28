const smile = document.getElementById("tmg-smile");
const sadSmile = document.getElementById("tmg-sadSmile");
const bigSmile = document.getElementById("tmg-bigSmile");
const fartSmile = document.getElementById("tmg-fartSmile");

const feedBtn = document.getElementById("feed");

const el = document.getElementById("tmg");

setInterval(() => {
  el.style.width = `calc(${el.clientWidth}px - 1px)`
  }, 1000);

setInterval(() => {
  status();
  health();
  weight();
  age();
  },100);

let feeder = function() {
  el.style.width = `calc(${el.clientWidth}px + 10px)`;
  tmgDisplayNone()
  smile.style.display = "block";
};

let player = function() {
  tmgDisplayNone()
  bigSmile.style.display = "block";

  let timeout = setTimeout(() => {
    tmgDisplayNone()
    smile.style.display = "block";
  }, 3000);
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

let status = function () {
  if (el.style.width < `calc(180px)`) {
    document.getElementById("fed-up").style.display = "none";
    document.getElementById("hungry").style.display = "inline-block";
  } else (
    document.getElementById("fed-up").style.display = "inline-block",
    document.getElementById("hungry").style.display = "none"
  )
};

let health = function () {
  document.getElementById("healthy").style.display = "inline-block";

  if ((el.style.width < `calc(150px)`) || (el.style.width > `calc(250px)`)) {
    document.getElementById("healthy").style.display = "none";
    document.getElementById("ill").style.display = "inline-block";
  } else document.getElementById("ill").style.display = "none";
}

let weight = function () {
  document.getElementById("weight").textContent = "Weight: " + el.clientWidth + "kg";
}

let age = function () {
  document.getElementById("age").textContent = "Age: " + years;
};
let years = 0;
setInterval( function () { years++; }, 10000);

feedBtn.addEventListener("click", feeder);
document.getElementById("play").addEventListener("click", player);
document.getElementById("panish").addEventListener("click", punisher);
