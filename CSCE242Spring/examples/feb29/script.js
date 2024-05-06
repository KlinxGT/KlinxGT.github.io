const getShoes = async() => {
    const url = "https://portiaportia.github.io/json/shoes.json";

    try{
        const reponse = await fetch(url);
        return Response.json();
    } catch(error){
        console.log(error);
    }
};

const showShoes = async() =>{
    const shows = await getShoes();

    showShoes.forEach((shoes)=>{
        console.log(shoe.name);
    });

};

const getShoeSection = (shoe) =>{
    const section = document.createElement("section");
    const h3 = document.createElement("h3");
    h3.innerHTML = shoe.name;
    section.append(h3);
    brandP.innerHTML = shoe.brand;
    section.append(brandP);

    const ul = document.createElement("ul");
    section.append(ul);

    shoes.revies.forEach((review)=>{
        const li = document.createElement("li");
        li.innerHTML = review;
        ul.append(li);
    });

    
    return section;
}

showShoes();