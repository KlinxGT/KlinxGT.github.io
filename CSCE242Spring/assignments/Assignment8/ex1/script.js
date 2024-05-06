const pics =["shovel.jpg", "read.jpg", "clown.jpg", "birthday.jpg", "rain.jpg", "work.jpg" ]
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

    if(action == 'b'){
        document.getElementById("guy").src ="images/read.jpg";       
    }
    if(action == 'c'){
        document.getElementById("guy").src ="images/clown.jpg";       
    }
    if(action == 'p'){
        document.getElementById("guy").src ="images/birthday.jpg";       
    }
    if(action == 'r'){
        document.getElementById("guy").src ="images/rain.jpg";       
    }
    if(action == 's'){
        document.getElementById("guy").src ="images/shovel.jpg";       
    }
    if(action == 'w'){
        document.getElementById("guy").src ="images/work.jpg";       
    }
    if(action == '')
    {
        document.getElementById("guy").src ="images/original.jpg";       
    }

}

toggle.onclick = showMen;
document.getElementById("orders").oninput = changePic;