function about() {
    clearPage();
    let main = document.getElementsByTagName("main")[0];
    main.className = "page3";
    let myimg = document.createElement("img");
    myimg.src = "images/me.jpg";
    myimg.className = "myimg";
    let myname = document.createElement("h1");
    myname.innerText = "BHUPENDER KUMAR SHARMA";
    myname.className = "textcenter bluetext";
    let desg = document.createElement("p");
    desg.innerText = "Pre-Final Year Student, at";
    desg.className = "textcenter boldline";
    let collegename = document.createElement("h2");
    collegename.innerText = "Noida Institute Of Engineering and Technology, Greater Noida, Uttar Pradesh";
    collegename.className = "textcenter orangetext";
    let gito = document.createElement("p");
    gito.innerText = "Get in Touch";
    gito.className = "textcenter boldline";
    let contact = document.createElement("div");
    let contactinfo = {
        "mail": "bkvats2394@gmail.com"
    }
    for (const i in contactinfo) {
        let container = document.createElement("div");
        container.className = "contactContainer";
        let img = document.createElement("img");
        img.src = `images/${i}.svg`;
        img.className = "contactimg";
        let detail = document.createElement("p");
        detail.innerText = contactinfo[i];
        detail.className = "info cursordefault";
        container.append(img, detail);
        contact.append(container);
    }
    contactinfo = {
        "linkedin": "https://www.linkedin.com/in/bhupender-kumar-sharma-2a144a2a7",
        "x": "https://twitter.com/BSharma10111"
    }
    for (const i in contactinfo) {
        let container = document.createElement("div");
        container.className = "contactContainer";
        let img = document.createElement("img");
        img.src = `images/${i}.svg`;
        img.className = "contactimg";
        let detail = document.createElement("a");
        detail.href = contactinfo[i];
        detail.target = "_blank";
        detail.innerText = contactinfo[i];
        detail.className = "info";
        container.append(img, detail);
        contact.append(container);
    }
    main.append(myimg, myname, desg, collegename, gito, contact);
}