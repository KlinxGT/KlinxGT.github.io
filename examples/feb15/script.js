const numLoop =() =>{
    const numList = document.getElementById("num-list");
    for(let i=0; i<10; i++){
        const li = document.createElement("li");
        li.innerHTML = `${i+1}`;
        numList.append(li);
    }
}

document.getElementById("btn-loop-nums").onclick = numLoop;