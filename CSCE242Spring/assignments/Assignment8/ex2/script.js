const toggle = document.getElementById("toggle");

const showMen =()=>{
    const view = document.getElementById("options");
    
    if(view.classList.contains("hidden"))
    {
        view.classList.remove("hidden");
    }
    else{
        view.classList.add("hidden");
    }
    
}

const changePic =() =>{
    const input = document.getElementById("orders").value;
    const action = input.charAt(input.length-1).trim();

    if(action == 0){
        document.getElementById("guy").src ="images/yoga1.jpg";       
    }
    if(action == 1){
        document.getElementById("guy").src ="images/yoga2.jpg";       
    }
    if(action == 2){
        document.getElementById("guy").src ="images/yoga3.jpg";       
    }
    if(action == 3){
        document.getElementById("guy").src ="images/yoga4.jpg";       
    }
    if(action == 4){
        document.getElementById("guy").src ="images/yoga5.jpg";       
    }
    if(action == 5){
        document.getElementById("guy").src ="images/yoga6.jpg";       
    }
    if(action == 6)
    {
        document.getElementById("guy").src ="images/yoga7.jpg";       
    }
    if(action == 7)
    {
        document.getElementById("guy").src ="images/yoga8.jpg";       
    }
    


}



document.getElementById("orders").oninput = changePic;
toggle.onclick = showMen;
