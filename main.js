const smile = document.getElementById("tmg-smile");
const sadSmile = document.getElementById("tmg-sadSmile");
const bigSmile = document.getElementById("tmg-bigSmile");

setInterval(() => {
  const el = document.getElementById("tmg");
  const { clientWidth, clientHeight } = el;
  el.style.width = `calc(${clientWidth}px - 1px)`;
  info();
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

let info = function () {
  fedUp();
  hungry();
  health();
  // weight();
  age();
}

let hungry = function () {
  const el = document.getElementById("tmg");
  const { clientWidth, clientHeight } = el;
  if (el.style.width < `calc(120px)`) {
    document.getElementById("fed-up").style.display = "none";
    document.getElementById("hungry").style.display = "inline-block";
  }
};

let fedUp = function () {
  const el = document.getElementById("tmg");
  const { clientWidth, clientHeight } = el;
  if (el.style.width > `calc(120px)`) {
    document.getElementById("hungry").style.display = "none";
    document.getElementById("fed-up").style.display = "inline-block";
  }
};

let health = function () {
  const el = document.getElementById("tmg");
  const { clientWidth, clientHeight } = el;
  document.getElementById("healthy").style.display = "inline-block";

  if ((el.style.width < `calc(80px)`) && (el.style.width > `calc(200px)`)) {
    document.getElementById("healthy").style.display = "none";
    document.getElementById("ill").style.display = "inline-block";
  } else document.getElementById("ill").style.display = "none";
}

let weight = function () {
  const el = document.getElementById("tmg");
  const { clientWidth, clientHeight } = el;

  document.getElementById("weight").append(`calc(${clientWidth}px / 10px)`);
}

let age = function () {
  let count = 0,
      interval = setInterval( function () {
        count++;

        if (count === 999) {
          clearInterval( interval);
        }
      }, 1000);
};

document.getElementById("feed").addEventListener("click", feeder);
document.getElementById("play").addEventListener("click", player);
document.getElementById("panish").addEventListener("click", punisher);
