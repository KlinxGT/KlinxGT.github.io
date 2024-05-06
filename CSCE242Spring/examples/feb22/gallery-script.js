document.querySelectorAll(".items section").forEach((section) =>{
    section.onclick =()=>{
        document.getElementById("dialog").style.display = "block";
        
        document.querySelector("#dialog-content img").src = e.currentTarget.querySelector.src;
    };
});