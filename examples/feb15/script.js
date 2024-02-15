const numLoop =() =>{

    
    const errorP=document.getElementById("error-num");
    errorP.innerHTML="";

    //get starting and ending numbers
    let startNum = document.getElementById("txt-start-num").value;
    let endNum = document.getElementById("txt-end-num").value;

    console.log(`Looping from ${startNum} to ${endNum}.`)

    

    if(NaN(startNum)|| NaN(endNum) || startNum.trim()=="" || endNum.Num.trim()==""){
        errorP.innerHTML = "You must enter number(s).";
        return;
    }



    startNum = parseInt(startNum);
    endNum = parseInt(endNum);


    if(startNum >= endNum){
        errorP.innerHTML ="ending numbere must be larger than starting number";
        return;
    } 
    //Creates an li for each number
    const numList = document.getElementById("num-list");
    for(let i=0; i<10; i++){
        const li = document.createElement("li");
        li.innerHTML = `${i+1}`;
        numList.append(li);
    }
}


const startStopCount =(e) =>{
    if(e.target.innerHTML.toLowerCase() == "start")
    
}
document.getElementById("btn-loop-nums").onclick = numLoop;