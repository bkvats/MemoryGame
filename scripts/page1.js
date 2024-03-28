function flash(box) {
    return new Promise((resolve) => {
        let count = 0;
        let s = setInterval(() => {
            if (count < 4) {
                box.classList.toggle("white");
                count++;
            }
            else {
                clearInterval(s);
                resolve(1);
            }
        }, 200);
    })
}
function clearPage() {
    if (document.body.firstElementChild.className === "blackpage") {
        document.body.firstElementChild.remove();
    }
    let main = document.getElementsByTagName("main")[0];
    if (main.childElementCount) {
        let previousOnPage = Array.from(main.children);
        for (let i = 0; i < previousOnPage.length; i++) {
            previousOnPage[i].remove();
        }
    }
}
function addHeaderandFooter() {
    let main = document.getElementsByTagName("main")[0];
    let nav = document.createElement("nav");
    document.body.prepend(nav);
    let home = document.createElement("a");
    home.href = "#";
    home.innerText = "Home";
    let playnow = document.createElement("a");
    playnow.href = "#";
    playnow.innerText = "Play Now";
    let about = document.createElement("a");
    about.href = "#";
    about.innerText = "About";
    let links = document.createElement("div");
    links.className = "links";
    links.append(home, playnow, about);
    nav.append(links);
    main.insertAdjacentElement("beforebegin", nav);

    let footer = document.createElement("footer");
    let naam = document.createElement("div");
    let hcwl = document.createElement("p");
    let myname = document.createElement("p");
    let email = document.createElement("p");
    hcwl.innerHTML = 'Handcrafterd with <img src = "images/heart.png" class = "heart">';
    myname.innerText = 'By "Bhupender Kr. Sharma"';
    email.innerText = '(bkvats2394@gmail.com)';
    naam.append(hcwl, myname, email);
    let copyright = document.createElement("p");
    copyright.innerHTML = "&copy; 2024 All rights reserved."
    footer.append(naam, copyright);
    main.insertAdjacentElement("afterend", footer);
}
function firstPage() {
    clearPage();
    let main = document.getElementsByTagName("main")[0];
    main.className = "";
    let card1 = document.createElement("div");
    card1.classList.add("card");
    let gamepreview = document.createElement("div");
    gamepreview.classList.add("container");
    let pbox = [];
    for (let i = 0; i < 4; i++) {
        pbox.push(document.createElement("div"));
        gamepreview.append(pbox[i]);
    }
    pbox[0].className = "red pbox";
    pbox[1].className = "green pbox";
    pbox[2].className = "yellow pbox";
    pbox[3].className = "blue pbox";
    card1.append(gamepreview);
    let flashInterval = setInterval(async () => {
        await flash(pbox[Math.floor(Math.random() * 4)]);
    }, 1000)
    let content = document.createElement("div");
    content.className = "content";
    let f1 = document.createElement("h1");
    let f2 = document.createElement("h1");
    let f3 = document.createElement("h1");
    f1.innerText = "Remember,";
    f2.innerText = "Recall,";
    f3.innerText = "Conquer...";
    let dscrp = document.createElement("p");
    dscrp.innerText = "In a world where memory is power, embark on a journey to unlock its full potential. Challenge your mind with intricate puzzle, and conquer the ultimate test of memory mastery. Are you ready to remember, recall, and rise above?";
    let start = document.createElement("button");
    start.innerHTML = "Play Now!";
    start.className = "primary-button";
    start.addEventListener("click", () => {
        clearInterval(flashInterval);
        secondPage();
    });
    let howtoplaybutton = document.createElement("button");
    howtoplaybutton.innerHTML = "How to Play?";
    howtoplaybutton.className = "primary-button";
    howtoplaybutton.addEventListener("click", () => {
        card2.scrollIntoView({behavior : "smooth"})
    });
    content.append(f1, f2, f3, dscrp, howtoplaybutton, start);
    card1.append(content);
    main.append(card1)
    let card2 = document.createElement("div");
    card2.classList.add("card");
    let content2 = document.createElement("div");
    content2.className = "content";
    let how = document.createElement("h1");
    how.innerText = "How to Play?";
    let howdscrp = document.createElement("p");
    howdscrp.innerText = "In this memory challenge, you're presented with four boxes of different colors. Initially, they'll blink in a sequence. Your task is to remember this sequence, as it'll progressively get longer each turn. After the sequence ends, you must click on the boxes in the correct order. If you succeed, the game continues; if not, it ends. Complete the sequence correctly 20 times to emerge victorious";
    let start2 = document.createElement("button");
    start2.innerHTML = "Play Now!";
    start2.className = "primary-button";
    start2.addEventListener("click", () => {
        secondPage();
    });
    content2.append(how, howdscrp, start2);
    let trophy = document.createElement("img");
    trophy.src = "images/trophy.png";
    trophy.width = 400;
    card2.append(content2, trophy);
    main.append(card2);
}
addHeaderandFooter();
let links = Array.from(document.querySelector(".links").children);
links[0].addEventListener("click", firstPage);
links[1].addEventListener("click", secondPage);
links[2].addEventListener("click", about);
firstPage();