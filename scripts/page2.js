function wait(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(1);
        }, time * 1000);
    })
}
async function flashBoxes() {
    for (let i = 0; i < selectedBoxes.length; i++) {
        await flash(selectedBoxes[i]);
    }
}
function changeButtonActiveness() {
    for (let i = 0; i < 4; i++) {
        boxes[i].disabled = !boxes[i].disabled;
    }
}
function stopTimer() {
    clearInterval(visualTimer);
    time.classList.add("hidden");
    clearTimeout(timer);
}
function stopGame() {
    let blackpage = document.createElement("div");
    blackpage.className = "blackpage";
    let oversection = document.createElement("div");
    oversection.className = "startsection";
    let loose = document.createElement("p");
    loose.innerText = "You Loose";
    loose.className = "tip";
    let replay = document.createElement("img");
    replay.src = "images/replay.svg";
    replay.className = "playbutton";
    replay.addEventListener("click", () => {
        secondPage();
    })
    oversection.append(loose, replay);
    blackpage.append(oversection);
    main.append(blackpage);
}
function setTimer() {
    time = document.querySelector(".time");
    time.innerText = "10";
    time.classList.remove("hidden");
    visualTimer = setInterval(() => {
        time.innerText = time.innerText - 1;
    }, 1000)
    timer = setTimeout(() => {
        time.innerText = "0";
        stopTimer();
        stopGame();
    }, 10000);
}
function win() {
    let blackpage = document.createElement("div");
    blackpage.className = "blackpage";
    let oversection = document.createElement("div");
    oversection.className = "startsection";
    let win = document.createElement("p");
    win.innerText = "Congrats! You Won this Game";
    win.className = "tip";
    let replay = document.createElement("img");
    replay.src = "images/replay.svg";
    replay.className = "playbutton";
    replay.addEventListener("click", () => {
        secondPage();
    })
    oversection.append(win, replay);
    blackpage.append(oversection);
    main.append(blackpage);
}
async function startGame() {
    if (turn < 21) {
        console.log(turn);
        changeButtonActiveness();
        selectedBoxes.push(boxes[Math.floor(Math.random() * 4)]);
        // console.log(selectedBoxes);
        await flashBoxes();
        changeButtonActiveness();
        // automate();
        setTimer();
    }
    else {
        win();
    }
}
function automate() {
    for (let i = 0; i < selectedBoxes.length; i++) {
        selectedBoxes[i].click();
    }
}
function setActions() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("click", async function() {
            stopTimer();
            if (selectedBoxes[current] != this) {
                this.classList.add("wronganimation");
                stopGame();
            }
            else {
                current++;
                console.log("you clicked right");
                this.classList.add("rightanimation");
                await wait(0.3);
                this.classList.remove("rightanimation");
                if (current < selectedBoxes.length) {
                    setTimer();
                }
            }
            if (current == selectedBoxes.length) {
                turn++;
                current = 0;
                if (turn < 21) {
                    rocketmargin += movevalue;
                    rocket.style.marginLeft = `${rocketmargin}px`; 
                }
                startGame();
            }
        })
    }
}
function secondPage() {
    clearPage();
    main = document.getElementsByTagName("main")[0];
    main.className = "mainOfPageTwo";
    let blackpage = document.createElement("div");
    blackpage.className = "blackpage";
    let startsection = document.createElement("div");
    startsection.className = "startsection";
    let playbutton = document.createElement("img");
    playbutton.src = "images/play.svg";
    playbutton.className = "playbutton";
    playbutton.addEventListener("click", () => {
        blackpage.remove();
        setActions();
        startGame();
    })
    let tipsection = document.createElement("div");
    tipsection.className = "tipsection";
    let bulb = document.createElement("img");
    bulb.className = "bulb";
    bulb.src = "images/bulb.svg";
    let tip = document.createElement("p");
    tip.innerText = "Tip: If same button is repeated take a pause while clicking on it.";
    tip.className = "tip";
    tipsection.append(bulb, tip);
    startsection.append(playbutton, tipsection);
    blackpage.append(startsection);
    let topbar = document.createElement("div");
    topbar.className = "topbar";
    let images = document.createElement("div");
    images.className = "imagesection"
    let startimg = document.createElement("img");
    startimg.className = "startimg";
    startimg.src = "images/start.png";
    let trophyimage = document.createElement("img");
    trophyimage.src = "images/trophy_gif.gif";
    trophyimage.className = "trophyimg";
    images.append(startimg, trophyimage);
    let progessection = document.createElement("div");
    progessection.className = "progresssection"
    let progressbar = document.createElement("div");
    progressbar.className = "progress";
    rocket = document.createElement("img");
    rocketmargin = 0;
    rocket.className = "rocket";
    rocket.src = "images/rocket.gif";
    progessection.append(progressbar, rocket);
    let reactionbar = document.createElement("div");
    let time = document.createElement("p");
    time.innerText = "10";
    time.className = "time";
    topbar.append(images, progessection, time);
    main.append(topbar);
    movevalue = progressbar.offsetWidth / 20;
    let gamecontainer = document.createElement("div");
    gamecontainer.classList.add("gamecontainer");
    boxes = [];
    for (let i = 0; i < 4; i++) {
        boxes.push(document.createElement("button"));
        gamecontainer.append(boxes[i]);
    }
    boxes[0].className = "red box";
    boxes[1].className = "green box";
    boxes[2].className = "yellow box";
    boxes[3].className = "blue box";
    main.append(gamecontainer);
    current = 0;
    turn = 0;
    selectedBoxes = [];
    main.append(blackpage);
}