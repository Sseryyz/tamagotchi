
// function showGameTpl() {
//     const gameTpl = document.getElementById("game-tpl").content;
//     document.body.append(gameTpl);
// }

let feeder = function () {
    const el = document.getElementById("tmg");
    const { clientWidth, clientHeight } = el;
    el.style.height = `calc(${clientHeight}px + 10px)`;
    el.style.width = `calc(${clientWidth}px + 10px)`;

    el.style.background = 'red'
}
document.getElementById("feed").addEventListener("click", feeder);




