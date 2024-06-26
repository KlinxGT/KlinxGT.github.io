document.getElementById("hamburger").onclick = () => {
    document.querySelector("#nav-bar ol").classList.toggle("hidden");
}
//Gets the stuff from the JSON
const getPost = async() => {
    try {
        return((await fetch("https://klinxgt.github.io/CSCE242Summer/Projects/Part5/HBS/jason.json")).json());
    }
    catch (error) {
        console.log(error);
    }
}
//Finds shortest colum
const getColum = () => {
    const col1 = document.getElementById("col1");
    const col2 = document.getElementById("col2");
    const col3 = document.getElementById("col3");
    const col0 = document.getElementById("col0");

    let theOne = col1;
    
    if(theOne.offsetHeight > col2.offsetHeight) {
        theOne = col2;
    }
    if(theOne.offsetHeight > col3.offsetHeight) {
        theOne = col3;
    }
    if(theOne.offsetHeight > col0.offsetHeight) {
        theOne = col0;
    }

    return theOne;
}   
//Loads the page with help from previous two methods
const postPage = async() => {
    const posts = await getPost();
    posts.forEach(async (post) => {
        const sec = document.createElement("section");
        sec.classList.add("post");

        const img = document.createElement("img");
        img.src = post.image;
        img.classList.add("postImg");
        sec.append(img);
        
        const cap = document.createElement("p");
        cap.textContent = post.caption;
        sec.append(cap);

        const likeSec = document.createElement("section");
        likeSec.classList.add("like-count");

        const likes = document.createElement("button");
        likes.classList.add("likes");
        likes.innerText = "Like";
        likeSec.append(likes);

        const count = document.createElement("h2");
        count.textContent = "0";
        likeSec.append(count);

        const dislikes = document.createElement("button");
        dislikes.classList.add("dislikes");
        dislikes.innerHTML = "Dislike";
        likeSec.append(dislikes);

        sec.append(likeSec);
        

        const col = getColum();
        col.append(sec);
    });
}


window.onload = postPage;
