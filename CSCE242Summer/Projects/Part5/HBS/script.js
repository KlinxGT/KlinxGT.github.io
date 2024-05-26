document.getElementById("hamburger").onclick = () => {
    document.querySelector("#nav-bar ol").classList.toggle("hidden");
}

const getPost = async() => {
    try {
        console.log(fetch(jason.json()));
    }
    catch (error) {
        console.log(error);
    }
}

window.onload = getPost;