const smile = document.getElementById("tmg-smile");
const sadSmile = document.getElementById("tmg-sadSmile");
const bigSmile = document.getElementById("tmg-bigSmile");

const feedBtn = document.getElementById("feed");

setInterval(() => {
  const el = document.getElementById("tmg");
  const { clientWidth, clientHeight } = el;
  el.style.width = `calc(${clientWidth}px - 1px)`;
  status();
  health();
  weight();
  age();
}, 1000);

let feeder = function() {
  const el = document.getElementById("tmg");
  const { clientWidth, clientHeight } = el;
  el.style.width = `calc(${clientWidth}px + 10px)`;

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

let status = function () {
  const el = document.getElementById("tmg");
  let { clientWidth, clientHeight } = el;
  if (el.style.width < `calc(180px)`) {
    document.getElementById("fed-up").style.display = "none";
    document.getElementById("hungry").style.display = "inline-block";
  } else (
    document.getElementById("fed-up").style.display = "inline-block",
    document.getElementById("hungry").style.display = "none"
  )
};

let health = function () {
  const el = document.getElementById("tmg");
  const { clientWidth, clientHeight } = el;
  document.getElementById("healthy").style.display = "inline-block";

  if ((el.style.width < `calc(150px)`) || (el.style.width > `calc(250px)`)) {
    document.getElementById("healthy").style.display = "none";
    document.getElementById("ill").style.display = "inline-block";
  } else document.getElementById("ill").style.display = "none";
}

let weight = function () {
  let el = document.getElementById("tmg");
  let { clientWidth, clientHeight } = el;
  document.getElementById("kg").textContent = el.clientWidth + "kg";
}

let age = function () {
  document.getElementById("year").textContent = years;
};
let years = 0;
setInterval( function () { years++; }, 10000);

feedBtn.addEventListener("click", feeder);
document.getElementById("play").addEventListener("click", player);
document.getElementById("panish").addEventListener("click", punisher);
