document.getElementById("hamburger").onclick = () => {
    document.querySelector("#nav-bar ol").classList.toggle("hidden");
}

const content = document.getElementById("content");
const ul = document.createElement("ul");
let count = 1;
ul.id = "list";


content.append(ul);

const list = (e) => {
    e.preventDefault();
    const sec = document.createElement("section");
    sec.classList.add("post");

    const counter = document.createElement("h5");
    counter.style.textAlign = "center";
    counter.innerHTML = `Post: ${count++}`;
    sec.append(counter);

    const pic = document.createElement("p");
    pic.textContent = `Image File: ${(document.getElementById("pic").value)}`;
    sec.append(pic);

    const cap = document.createElement("p");
    cap.innerText = `Captions: ${document.getElementById("caption").value}`;
    sec.append(cap);
    
    const des = document.createElement("p");
    des.innerText = `Extra info: ${document.getElementById("description").value}`;
    sec.append(des);
    
    const tags = document.createElement("p");
    tags.innerText = `Tags: ${document.getElementById("tags").value}`;
    sec.append(tags);

    ul.append(sec);
}

form.onsubmit = list;

