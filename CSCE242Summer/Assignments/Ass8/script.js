/*Toggle Menu*/
const tog = document.getElementById("toggle");
const options = document.getElementById("options");
//Change up down arrow as well as whether the nav is hidden
const swap = () => {
    if (options.classList.contains("hidden")) {
        tog.innerHTML = "&#9650;";
        options.classList.remove("hidden");
    }
    else {
        options.classList.add("hidden");
        tog.innerHTML = "&#9660;";
    }
}
tog.onclick = swap;

/*Slider*/
const slider = document.getElementById("slide");
//Concatenated rgb and message
document.getElementById("color-slide").style.backgroundColor = "rgb("+slider.value+",0,0)"; 
slider.oninput = () => {
    document.getElementById("color-slide").style.backgroundColor = "rgb("+slider.value+",0,0)";
    if(slider.value <=85) {
        document.getElementById("message").innerHTML = "Ooooh Dark";
    }
    else if(slider.value > 85 && slider.value <= 170) {
        document.getElementById("message").innerHTML = "Nice Tone";
    }
    else {
        document.getElementById("message").innerHTML = "AHHHH TOO BRIGHT!";
    }
}

/*Exercise 1 and two toggle*/
//Nav items
const ex1 = document.getElementById("ex1");
const ex2 = document.getElementById("ex2");
//Actual container
const exercise1 = document.getElementById("color-slide");
const exercise2 = document.getElementById("picture-size");

ex1.onclick = () => {
    exercise1.classList.remove("hidden");
    exercise2.classList.add("hidden");
}

ex2.onclick = () => {
    exercise2.classList.remove("hidden");
    exercise1.classList.add("hidden");
}

/*Picture*/

const clicker = document.getElementById("buttons");
const image = document.getElementById("img");

clicker.onclick = e => {
    const inner = e.target.innerHTML.toLowerCase();
    if(inner == "small") {
        image.src = "https://picsum.photos/75/75";
    }
    else if (inner == "medium") {
        image.src = "https://picsum.photos/125/125";
    }
    else {
        image.src = "https://picsum.photos/200/200"
    }
} 
