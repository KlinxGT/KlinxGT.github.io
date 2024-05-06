const changeImage = () => {
    
    if(document.querySelector("#pic").src.includes("pic.png")){
        document.getElementById("pic").src = "images/pic2.png";
    }
    else if(document.getElementById("pic").src.includes("pic2.png")){
        document.getElementById("pic").src ="images/pic3.png";
    }
    else{
        document.getElementById("pic").src="images/pic.png";
    }

}

let slider = document.getElementById("slider");
let output ="";
slider.oninput =()=>{
    output.innerHTML = slider.value;
}




document.getElementById("pic").onclick = changeImage;