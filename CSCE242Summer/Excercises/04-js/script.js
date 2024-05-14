const functun = () => {
    document.getElementById("word").classList.add("class")
}

const hide = () => {
    document.getElementById("img").classList.add("hidden")
}

document.getElementById("btn").onclick = functun;
document.getElementById("img").onclick = hide;