const imgArr = {
    "images/birthday.jpg" : "Happy Birthday to the Birthday Boy", 
    "images/clown.jpg" : "Such a clownie clown", 
    "images/rain.jpg" : "Look at his lil umbrella",
    "images/read.jpg" : "He's so smart reading a book", 
    "images/shovel.jpg" : "What's he gonna dig I wonder",
    "images/work.jpg" : "He is hacking into a bank lol"
};

const keys = Object.getOwnPropertyNames(imgArr);
const gal = document.getElementById("gallery");
const desc = document.getElementById("description");

window.onload = () => {
    for(let i in keys) {
        image = document.createElement("img");
        image.src = keys[i];  
        image.onclick = () => {
            desc.textContent = imgArr[keys[i]];
        } 
        gal.append(image);       
    }
}