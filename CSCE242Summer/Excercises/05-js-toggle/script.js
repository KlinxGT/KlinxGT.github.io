const toggle = document.getElementById("toggle");
const colum = document.getElementById("colum");

toggle.onclick = () => {
    colum.classList.toggle("hide-small");
}

//moving to the right 
let ballLeft = 0;
let balltop = 0;
const root = document.querySelector(":root");

document.getElementById("right-arrow").onclick = () => {
    ballLeft +=10;
   
    root.style.setProperty("--ball-left", ballLeft + "px");
}

document.getElementById("left-arrow").onclick = () => {
    ballLeft -=10;

    root.style.setProperty("--ball-left", ballLeft + "px");
}

document.getElementById("top-arrow").onclick = () => {
    balltop -=10;
   
    root.style.setProperty("--ball-top", balltop + "px");
}

document.getElementById("bottom-arrow").onclick = () => {
    balltop +=10;
   
    root.style.setProperty("--ball-top", balltop + "px");
}

document.getElementById("txt-color").onkeyup = e => {
    const color = e.currentTarget.value.toLowerCase();
    const messageP = document.getElementById("color-message");

    if(color == "red") {
        messageP.innerHTML = "You are angry!";
    }
    else if (color == "blue") {
        messageP.innerHTML = "You are moody";
    }
    else if (color == "green") {
        messageP.innerHTML = "U r gae lol"; 
    }
    else if (color == "heyooooo") {
        messageP.innerHTML = "HEYOOOOOOO!"
    }
    else {
        messageP.innerHTML = "You are nothing";
    }
    
    
}