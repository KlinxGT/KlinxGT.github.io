const getCockTail = async () => {
    try {
      return (await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")).json();
    } catch (error) {
      console.log(error);
    }
  };
  
  const showCock= async () => {
    const cockTail = (await getCockTail()).drinks;
    const menu = document.getElementById("cocktails");

    cockTail.forEach(async (cock) => {
      const section = document.createElement("section");
      section.classList.add("drink");

      const h3 = document.createElement("h3");
      h3.innerHTML = cock.strDrink;
      section.append(h3);
      deet.append(h3);
  
      const p = document.createElement("p");
      p.innerHTML = `<strong>Category:<strong> ${cock.strCategory}`;
      deet.append(p);

      const p1 = document.createElement("p");
      p.innerHTML = `<strong>Category:<strong> ${cock.strInstructions}`;
      deet.append(p1);

      section.onclick = () => {
        document.getElementById("dialog").style.display = "block";
      }
      document.getElementById("dialog-x").onclick = () => {
        document.getElementById("dialog").style.display = "none";
      }
      menu.append(section);
    });
  };
  
  window.onload = showCock();
  