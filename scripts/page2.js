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
    clearTimeout(timer);
    time.style.width = "10em";
    time.style.backgroundColor = "black";
    time.classList.remove("lesstime");
    clock.classList.remove("lesstime");
}
function stopGame() {
    let blackpage = document.createElement("div");
    blackpage.className = "blackpage";
    let mainsection = document.createElement("div");
    mainsection.className = "mainsection";
    let colorarea = document.createElement("div");
    colorarea.className = "colorarea redcolor";
    let emoji = document.createElement("img");
    emoji.src = "images/crying.svg";
    emoji.className = "cryingimg";
    let close = document.createElement("img");
    close.src = "images/close.svg";
    close.className = "close";
    close.addEventListener("click", firstPage);
    colorarea.append(emoji, close);
    let scoresection = document.createElement("div");
    scoresection.className = "scoresection";
    let wrongchoice = document.createElement("p");
    wrongchoice.className = "wrongtext";
    wrongchoice.innerText = "You Choose The Wrong Color";
    let gameover = document.createElement("p");
    gameover.className = "gameover";
    gameover.innerText = "GAME OVER!";
    let displayscore = document.createElement("div");
    displayscore.className = "displayscore";
    let scoreimg = document.createElement("img");
    scoreimg.src = "images/scorecard.svg";
    scoreimg.className = "scoreimg";
    let score = document.createElement("p");
    score.className = "scoretext";
    score.innerText = `Final Score: ${turn} / 20`;
    displayscore.append(scoreimg, score);
    scoresection.append(wrongchoice, gameover, displayscore);
    let replaybutton = document.createElement("img");
    replaybutton.src = "images/replay.svg";
    replaybutton.className = "replayimg";
    replaybutton.addEventListener("click", secondPage);
    mainsection.append(colorarea, scoresection, replaybutton);
    blackpage.append(mainsection);
    document.body.prepend(blackpage);
}
function outOfTime() {
    let blackpage = document.createElement("div");
    blackpage.className = "blackpage";
    let mainsection = document.createElement("div");
    mainsection.className = "mainsection";
    let colorarea = document.createElement("div");
    colorarea.className = "colorarea bluecolor";
    let emoji = document.createElement("img");
    emoji.src = "images/sandclock.svg";
    emoji.className = "cryingimg";
    let close = document.createElement("img");
    close.src = "images/close.svg";
    close.className = "close";
    close.addEventListener("click", firstPage);
    colorarea.append(emoji, close);
    let scoresection = document.createElement("div");
    scoresection.className = "scoresection";
    let wrongchoice = document.createElement("p");
    wrongchoice.className = "wrongtext";
    wrongchoice.innerText = "You Ran Out Of Time";
    let gameover = document.createElement("p");
    gameover.className = "gameover fontcolorblue";
    gameover.innerText = "GAME OVER!";
    let displayscore = document.createElement("div");
    displayscore.className = "displayscore";
    let scoreimg = document.createElement("img");
    scoreimg.src = "images/scorecard.svg";
    scoreimg.className = "scoreimg";
    let score = document.createElement("p");
    score.className = "scoretext";
    score.innerText = `Final Score: ${turn} / 20`;
    displayscore.append(scoreimg, score);
    scoresection.append(wrongchoice, gameover, displayscore);
    let replaybutton = document.createElement("img");
    replaybutton.src = "images/replay.svg";
    replaybutton.className = "replayimg";
    replaybutton.addEventListener("click", secondPage);
    mainsection.append(colorarea, scoresection, replaybutton);
    blackpage.append(mainsection);
    document.body.prepend(blackpage);
}
function setTimer() {
    time = document.querySelector(".timebar");
    clock = document.querySelector(".timer").firstElementChild;
    let length = 10;
    let flag = true;
    visualTimer = setInterval(() => {
        length -= 0.05;
        time.style.width = `${length}em`;
        if (flag) {
            if (length < 6) {
                clock.classList.add("lesstime");
                time.classList.add("lesstime");
                time.style.backgroundColor = "red";
                flag = !flag;
            }
        }
    }, 50)
    timer = setTimeout(() => {
        stopTimer();
        outOfTime();
    }, 10000);
}
function win() {
    let blackpage = document.createElement("div");
    blackpage.className = "blackpage";
    let mainsection = document.createElement("div");
    mainsection.className = "mainsection";
    let colorarea = document.createElement("div");
    colorarea.className = "colorarea greencolor";
    let emoji = document.createElement("img");
    emoji.src = "images/trophy.svg";
    emoji.className = "winimg";
    let close = document.createElement("img");
    close.src = "images/close.svg";
    close.className = "close";
    close.addEventListener("click", firstPage);
    colorarea.append(emoji, close);
    let scoresection = document.createElement("div");
    scoresection.className = "scoresection";
    let wrongchoice = document.createElement("p");
    wrongchoice.className = "wrongtext";
    wrongchoice.innerText = "Congratulations";
    let gameover = document.createElement("p");
    gameover.className = "gameover fontcolorgreen";
    gameover.innerText = "YOU WON!";
    let displayscore = document.createElement("div");
    displayscore.className = "displayscore";
    let scoreimg = document.createElement("img");
    scoreimg.src = "images/scorecard.svg";
    scoreimg.className = "scoreimg";
    let score = document.createElement("p");
    score.className = "scoretext fontcolorcoral";
    score.innerText = `Final Score: ${turn} / 20`;
    displayscore.append(scoreimg, score);
    scoresection.append(wrongchoice, gameover, displayscore);
    let replaybutton = document.createElement("img");
    replaybutton.src = "images/replay.svg";
    replaybutton.className = "replayimg";
    replaybutton.addEventListener("click", secondPage);
    mainsection.append(colorarea, scoresection, replaybutton);
    blackpage.append(mainsection);
    document.body.prepend(blackpage);
}
async function startGame() {
    let prev = selectedBoxes[selectedBoxes.length - 1];
    if (turn < 21) {
        changeButtonActiveness();
        let rbox = boxes[Math.floor(Math.random() * 4)];
        while (rbox === prev) {
            rbox = boxes[Math.floor(Math.random() * 4)];
        }
        selectedBoxes.push(rbox);
        prev = rbox;
        await flashBoxes();
        changeButtonActiveness();
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
                let wrong = document.createElement("audio");
                wrong.src = "audios/wrong.mp3";
                wrong.volume = "0.5";
                wrong.autoplay = true;
                main.append(wrong);
                await wait(0.9);
                stopGame();
            }
            else {
                current++;
                this.classList.add("rightanimation");
                let correct = document.createElement("audio");
                correct.src = "audios/correct.mp3";
                correct.volume = "0.5";
                correct.autoplay = true;
                main.append(correct);
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
    let bg = document.createElement("audio");
    bg.src = "audios/bg.mp3";
    bg.loop = true;
    bg.autoplay = true;
    bg.volume = "0.2";
    let mainsection = document.createElement("div");
    mainsection.className = "mainsection";
    let colorarea = document.createElement("div");
    colorarea.className = "colorarea orangecolor";
    let playbutton = document.createElement("img");
    playbutton.src = "images/simple_play.svg";
    playbutton.className = "mainbutton";
    playbutton.addEventListener("click", async () => {
        blackpage.remove();
        setActions();
        await wait(0.5);
        startGame();
    })
    let close = document.createElement("img");
    close.src = "images/close.svg";
    close.className = "close";
    close.addEventListener("click", firstPage);
    colorarea.append(playbutton, close);
    let scoresection = document.createElement("div");
    scoresection.className = "oversection";
    let bulb = document.createElement("img");
    bulb.className = "bulb";
    bulb.src = "images/bulb.svg";
    let tip = document.createElement("p");
    let tiparray = ["Don't memorise the complete sequence in every turn, just keep remember the new one", "Try to identify patterns or create associations with colors to aid in remembering the sequence. Associating colors with numbers or shapes can be helpful", "Like any skill, memory improves with practice. Spend some time regularly playing the game to sharpen your memory skills", "Concentration is essential. Minimize distractions and focus fully on memorizing and recalling the sequence", "Visualize the sequence in your mind before clicking on the boxes. This can help reinforce your memory of the order", "Remember to enjoy the challenge! Approach each game as an opportunity to improve your memory skills and have fun along the way"]
    tip.innerText = `Tip: ${tiparray[Math.floor(Math.random() * tiparray.length)]}.`;
    tip.className = "overtext";
    scoresection.append(bulb, tip);
    mainsection.append(colorarea, scoresection);
    blackpage.append(mainsection, bg);
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
    let timer = document.createElement("div");
    timer.className = "timer";
    let clock = document.createElement("img");
    clock.src = "images/clock.svg";
    let timebar = document.createElement("div");
    timebar.className = "timebar";
    timebar.style.width = "10em";
    timer.append(clock, timebar);
    topbar.append(images, progessection, timer);
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
    document.body.prepend(blackpage);
}