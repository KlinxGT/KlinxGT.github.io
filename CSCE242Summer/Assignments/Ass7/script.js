const counter = document.querySelector("#counter");
let count = 0;
const plus_one = () => {
   count++;
   document.querySelector("#counter h1").innerHTML = count;
}
counter.onclick = plus_one;

const picture = document.getElementById("pic");

const refresh = () => {
    location.reload();
}

picture.onclick = refresh;

const slider = document.getElementById("slide");
const box = document.getElementById("box");
box.style.left = slider.value + 'px';

slider.oninput = () => {
    box.style.left = slider.value+'px';
}

