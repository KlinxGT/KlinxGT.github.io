const getBreweries = async() => {
    try{
        return(await fetch("https://api.openbrewerydb.org/breweries"))
    } catch(error){
        console.log(error);
    }
};

const getMap = async(latitude, logitude) =>{
    try{
        return await fetch()
    }catch(error){
        console.log("error");
    }
}
const showBreweries = async() =>{
    const breweries = await getBreweries();

    breweries.forEach(async(brewery) =>{
        const allBsSection = document.getElementById("breweries-section");
        const brewerySection = document.createlement("section");
        allBsSectioin.append(brewerySection);
        brewerySection.classList.add("brewery");

        //url link
        const a = document.createElement("a");
        a.href = brewery.website_url;
        brewerySection.append(a);

        const h3 =document.createElement("h3");
        h3.innerHTML = brewery.name;
        a.append(h3);

        const p = dument.createElement("p");
        a.append(p);
        p.innerHTML = `${brewery.brewery_type} brewery`;
        });

        const iframe = document.createElement("Iframe");
        iframe.src = await getMap(brewery.latitude,brewery.longitude) 
};

showBreweries();