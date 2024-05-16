const input = document.getElementById("txt-star");
const validate = document.getElementById("btn-star");
const nightSky = document.getElementById("abyss");
const err = document.getElementById("error");

const check = () => {
    if(input.value <= 0) {
        err.classList.remove("hidden");
    }   
    else {
        err.classList.add("hidden");
        fill();
    }
}

const numb = document.getElementById("number");

const fill = () => {
    width = (nightSky.offsetWidth-40);
    height = (nightSky.offsetHeight-40);
    nightSky.innerHTML = "";
    numb.innerHTML = "Star #:";
    numb.classList.add("hidden");

    for(let i = 0; i<input.value; i++) {
        star = document.createElement("section")
        star.classList.add("star");
        nightSky.append(star);
        star.style.left = `${Math.random(width) * width}px`;
        star.style.top = `${Math.random(height) * height}px`; 
        star.onclick = () => {
            numb.classList.remove("hidden");
            numb.innerHTML = "Star #:";
            numb.innerHTML += " " + (i+1);
        }  
    }
}

validate.onclick = () =>{
    check();
} 
