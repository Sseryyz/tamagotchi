


let feeder = function () {
    const el = document.getElementById("tmg-happy");
    const { clientWidth, clientHeight } = el;
    el.style.height = `calc(${clientHeight}px + 5px)`;
    el.style.width = `calc(${clientWidth}px + 5px)`;
}
let play = function () {

}
let punish = function () {

}
document.getElementById("feed").addEventListener("click", feeder);
document.getElementById("play").addEventListener("click", play);
document.getElementById("panish").addEventListener("click", punish);




