document.getElementById("hamburger").onclick = () => {
    document.querySelector("#nav-bar ol").classList.toggle("hidden");
}

const getHome = async () => {
    try {
        const home = await fetch("../HBS/index.html");
        console.log(home);
    } catch (error) {
        console.log(error);
    }
}

getHome();