const max = 440;
const min = 0;
let height = 0;
const ball = document.getElementById("ball");
let req1= true;
let req2=false;

const move =()=>{
    
    if(req1){
        if((height<max)){
            height += 10;
            ball.style.top =`${height}px`;
        }
        else{
            req2=true;
            req1=false;
        }
    }
    if((req2))
    {   
        if(height>min){
            height -= 10;
            ball.style.top =`${height}px`
        }
        else{
            req1=true;
            req2=false;
            
        }
    }
    
   
}


const ballDown=(e) =>{
    e.preventDefault();
    if(document.getElementById("toggle").innerText == "Start"){

        interVal = setInterval(move,200)
        document.getElementById("toggle").innerText ="Stop"
    
    }
    else if(document.getElementById("toggle").innerHTML == "Stop")
    {
        clearInterval(interVal);
        document.getElementById("toggle").innerHTML = "Start";
    }
}



document.getElementById("toggle").onclick = ballDown;
