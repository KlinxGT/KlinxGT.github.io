//toggling the navigation bar
document.getElementById("toggle").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
}

const root = document.querySelector(":root");
const button = document.getElementById("btn-funds");

button.onclick = () => {
    let amount = document.getElementById("txt-funds").value;
    const errorFunds = document.getElementById("error-funds");
    errorFunds.innerHTML = "";
    let percent = "0%";

    if(isNaN(amount)) {
        errorFunds.innerText = "* Not a number";
        return;
    }
    else if (amount <0) {
        errorFunds.innerText = "# Number needs to be >=0";
        return;
    }
    else {
        percent = (amount/100) + "%";
    }


    root.style.setProperty("--funds", percent);
}

//loops
document.getElementById("btn-loops").onclick = () => {
    const result = document.getElementById("loops-result");

    for(let i=0; i < 10; i++) {
        console.log(i);
    }
}