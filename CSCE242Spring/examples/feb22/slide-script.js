const slideForward = () =>{
    //console.log("Forward");
    if(getCurrentImage().nextElementSibling == null ){
        slide(document.getElementById("#preview img"));
    }
    else{
        slide(getCurrentImages().nextElementSibling);
    }
};

const slideBackward =() =>{
    //console.log("Backward");
    if(getCurrentImage().previousElementSibling == null ){
        slide(document.getElementById("#preview: last-child"));
    }
    else{
        slide(getCurrentImages().previousElementSibling);
    }
}

const slide = (nextImage) =>{
  const currentImage = document.querySelector("#preview : not(.hidden)");  
  getCurrentImage.classList.add("hidden");
  nextImage.classList.remove("hidden");
};

document.getElementById("forward-arrow").onclick = slideForward;
document.getElementById("backward-arrow").onclick =slideBackward;

document.querySelectorAll("#thumbs img").forEach((img,index)=>{
    console.log(img);
    img.onclick = () =>{
        slide(document.querySelector(`#preview: nth-child(${index+1})`));
    };
});