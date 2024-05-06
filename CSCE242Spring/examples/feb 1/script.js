let pos = 0;
const colorSquare =() =>{
    document.getElementById("square").classList.add("rainbow");
    //document.querySelector("#square")
};

const moveDown = () => {
    const root = document.querySelector(":root");
    root.style.setProperty("--square-top", "200px")
};

const addCircle =()=> {

    const color = document.getElementById("txt-color").Value;
    const root = document.querySelector(":root");
    root.style.setProperty("--ball-color",color);


    const playground = document.getElementById("circle-playground");
    //playground.innerHTML += <section class = 'circle'></section>;
    const ball = document.createElement("section");
    ball.classList.add("circle");
    playground.append(ball);
    ball.classList.add("Circle");
    ball.style.background = color;
}



document.getElementById("btn-color").onclick =colorSquare;
document.getElementById("btn-move-down").onclick = moveDown;
document.getElementById("btn-add-circle").onclick = addCircle;