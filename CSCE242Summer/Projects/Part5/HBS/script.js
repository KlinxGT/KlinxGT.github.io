document.getElementById("hamburger").onclick = () => {
    document.querySelector("#nav-bar ol").classList.toggle("hidden");
}



const getPost = async() => {
    try {
        return((await fetch("https://klinxgt.github.io/CSCE242Summer/Projects/Part5/HBS/jason.json")).json());
    }
    catch (error) {
        console.log(error);
    }
}

const postPage = async() => {
    posts = await getPost();
    posts.forEach(async (post) => {
        sec = document.createElement("section");
        sec.classList.add("post");

        img = document.createElement("img");
        img.src = post.image;
        img.style.width = "100";
        sec.append(img);
        
        cap = document.createElement("p");
        cap.innerText = post.caption;

        document.querySelector(`#col${post._id%4}`).append(sec);
    });
}


window.onload = postPage;