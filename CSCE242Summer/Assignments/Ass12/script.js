const getIceCream = async() => {
    try {
        const ice = (await fetch("https://portiaportia.github.io/json/ice-creams.json")).json();
        return ice;
    } catch (error) {
        console.log(error);
    }
};

const getFlavors = async() => {
    const json = await getIceCream();
    
    json.forEach(async (flavor) => {
        const sec = document.createElement("section");

        const img = (document.createElement("img"))
        img.src =`https://portiaportia.github.io/json/images/ice-creams/${flavor.image}`;
        sec.classList.add("flav");
        sec.append(img);
        
        const overlay = document.createElement("section");
        overlay.textContent = `${flavor.name}`;
        overlay.classList.add("overlay");
        sec.append(overlay);
    
        const store = document.getElementById("ice-cream-store");
        store.append(sec);
    });
}

getFlavors();