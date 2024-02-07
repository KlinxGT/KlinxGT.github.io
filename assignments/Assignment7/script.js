function changeImage(){
    
    if (document.getElementById("pic").src == "images/pic.png"){
        document.getElementById("pic").src = "images/pic2.png";
    }
    else if(document.getElementById("pic").src=="images/pic2.png"){
        document.getElementById("pic").src ="images/pic3.png";}
    else{
        document.getElementById("pic").src="images/pic.png";
    }

}

document.getElementById("pic").onload = changeImage;