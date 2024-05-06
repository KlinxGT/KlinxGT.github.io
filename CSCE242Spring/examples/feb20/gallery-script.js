let count = 0;

/*
const interval = setInterval(()=>{
    const allSections = document.querySelectorAll(".items section");
    document.querySelectorAll(".items section").forEach((section)=>{
        section.classList.remove("highlighted");
    });

    if(count > allSections.length){
        count = 1;
    }

    document.querySelector(`.items section: nth-child(${count})`).classList.add("highlighted");

    count++;
}, 500);
*/

const interval = setInterval(()=>{
    const currentSection = document.querySelector(".items section.highlighted");
    const nextSection = currentSection.nextElementSibling;

    if(nextSection == null){
        nextSection = document.querySelector(".items section");
    }

    currentSection.classList.remove("highlighted");
    nextSectioni.classList.add("highlighted");
})