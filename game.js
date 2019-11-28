function state (){
    return {
        isLocked: false,
        lock: () => this.isLocked = true,
        unLock: () => this.isLocked = false,
    };
}

function action(beforeCb, afterCb, state) {
    return () => {
        if(state.isLocked) {
            return;
        }

        state.lock();
        beforeCb();


        if(afterCb){
            setTimeout(() => {
                afterCb();
                state.unLock();
            }, 3000);
        } else {
            state.unLock();
        }
    };
}

function init({ startAge }) {
    const smile = document.getElementById("tmg-smile");
    const sadSmile = document.getElementById("tmg-sadSmile");
    const bigSmile = document.getElementById("tmg-bigSmile");
    const fartSmile = document.getElementById("tmg-fartSmile");

    const el = document.getElementById("tmg");

    let years = startAge;
    let actionInProgress = state();

    setInterval( () => {
        years++;
        overeaten();
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
        tmgDisplayNone()

        if (el.clientWidth > 250) {
            fartSmile.style.display = "block";
        } else {
            smile.style.display = "block";
        }
    };

    let feeder = function() {
        el.style.width = `calc(${el.clientWidth}px + 10px)`;
        tmgDisplayNone()
        smile.style.display = "block";
    };

    const play = action(
        () => {
            tmgDisplayNone()
            bigSmile.style.display = "block";
        },
        () => {
            tmgDisplayNone();
            smile.style.display = "block";
        },
        actionInProgress
    );

    let punish = action(()=> {
        tmgDisplayNone()
        sadSmile.style.display = "block";
    }, null, actionInProgress);

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
    document.getElementById("play").addEventListener("click", play);
    document.getElementById("panish").addEventListener("click", punish);
}

// 1. let to const for functions
// 2. use el-cache: replace document.getElementById with predefined variables
// 3. function-name as verbs
// 4. use single interval
// 5. prefer use class instead of id