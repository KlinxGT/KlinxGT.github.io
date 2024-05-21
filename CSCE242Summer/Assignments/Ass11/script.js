
/*Class about unhealthy stuff in sodas*/
//source is https://www.dentistryiq.com/dental-hygiene/student-hygiene/article/16366322/beyond-the-sugar-chemicals-in-sodas-and-their-link-to-systemic-diseases-and-oral-health
class chem {
    //constructor with the name, description, img, symptoms and fun fact about an ingredient in sodas
    constructor(title, description, img, sympt1, sympt2, funFact) {
        this.title = title;
        this.description = description;
        this.img = img;
        this.sympt1 = sympt1;
        this.sympt2 = sympt2;
        this.funFact = funFact;
    }

    //returns a section with the name and img of a soda
    get section() {
        const sec = document.createElement("section");
        const ch = document.createElement("h3");
        const img = document.createElement("img");
        sec.onclick = this.expandedSection;


        img.src = `img/${this.img}`;
        ch.innerText = this.title;
        img.classList.add("images");

        sec.append(ch);
        sec.append(img);
        sec.classList.add("chemicals");
      
        
        return sec;
    }

    //Shows the modal with all the information in it
    expandedSection = () => {
        document.getElementById("dialog").style.display ="block";
        document.getElementById("dialog-x").onclick = () => {
            document.getElementById("dialog").style.display = "none";
        }        
        const deets = document.getElementById("dialog-details");
        const info = document.createElement("section");
        const tit = document.createElement("h2");
        const des = document.createElement("p");
        const sympt1 = document.createElement("p");
        const sympt2 = document.createElement("p");
        const fun = document.createElement("p");
        const img = document.createElement("img");

        deets.innerHTML = "";

        tit.innerHTML = this.title;
        des.innerHTML = `<strong>Description:</strong> ${this.description}`;
        sympt1.innerHTML = `<strong>Common Effects:</strong> ${this.sympt1}`;
        sympt2.innerHTML = `<strong>Additional Side Effects:</strong> ${this.sympt2}`;
        fun.innerHTML = `<strong>\"Fun\" Facts: </strong> ${this.funFact}`;
        img.style.display = "inline-block";
        img.src = `img/${this.img}`;
        img.style.width = "250px";
        img.style.height= "200px";
        img.style.margin = "12% 0px";

        info.append(tit);
        info.append(des);
        info.append(sympt1);
        info.append(sympt2);
        info.append(fun);

        deets.append(info);
        deets.append(img);
        deets.style.display = "flex";
        deets.style.minWidth = "fit-content";
    }
};




const soda = [];
soda.push(new chem("High Fructose Corn Syrup","HFCS was widely used in soft drinks because it was less expensive than sucrose; fructose was rarely consumed alone and was usually consumed in sugar-sweetened beverages with sucrose. HFCS goes through an enzymatic process to raise the fructose level."
+ " It was then combined with cornstarch, which was pure glucose.",
"hfcs.png", "Increased cardiovascular issues that could lead to a greater risk of developing non-alcohol fatty liver disease", 
"Greater risk of developing high blood pressure, inflammation, stroke, and coronary heart disease.", "The most frequently used high fructose corn syrup used in soda was HFCS 55, meaning it was roughly 55% fructose and 45% glucose and the taste was equivalent to table sugar"));
soda.push(new chem("Aspartame", 
"Aspartame is the number one sweetener used in diet sodas. It is about 180 times sweeter than sugar, but without the calories. When consumed, aspartame was broken down into “phenylalanine, aspartic acid, methanol which further produces formaldehyde, formic acid and diketopiperazine.",
"asspart.png",
"Likely side effects from aspartame ingestion could have been confusion, loss of memory, facial pain, restless legs, tremors, seizures, weight changes, parasthesia, depression, irritation, aggression, anxiousness, loss of hearing, ringing in the ears, slurred speech, dry eyes, itching, intense premenstrual syndrome, and changes in menstruation",
"A 14-year study of over 66,000 women found increased amounts of regular and diet soft drinks was linked with a greater increase of acquiring type II diabetes.", 
"Some people do not have the ability to metabolize phenylalanine and should have refrained from ingesting aspartame because it possibly could have caused seizures and mental retardation" ));
soda.push(new chem("Caffeine", 
"Caffeine, a stimulant, is one of the major ingredients in sodas. In the United States, consumption of sodas with caffeine had been on an increase for years. Due to the gastric upset that was caused by coffee, many people began drinking caffeine-containing soft drinks in place of coffee, in order to get the same benefits that the caffeine in coffee gave, but without the adverse gastrointestinal effects.",
"caff.png",
"Caffeine acted upon the adenosine receptors in the kidneys, which produced diuretic effects, causing an increased urine production. Lower birth rates have also been reported in some studies in relation to women having consumed caffeine during pregnancy, as well as a significant reduction in becoming pregnant.", 
"Physical dependence on caffeine could be seen in adults who have consumed as little as 100 mg in a day; withdrawal symptoms, which included headaches and fatigue, began anywhere from 12-24 hours after caffeine cessation, and were the strongest during the first couple of days.",
"The amount of caffeine in a 12-ounce soda ranged from 20-50 mg per serving, as compared to 75-150 mg per eight-ounce cup of coffee"));
soda.push(new chem("Phosphoric Acid",
"Phosphoric acid (H3PO4) was a corrosive acid. As a colorless and odorless agent, it was found in most acidic soft drinks (Keeling, 2010). Depending on replacement of different numbers of hydrogen atoms, it could form three classes of salts that were named primary phosphates, dibasic phosphates, and tribasic phosphates. Primary phosphate could control acidity of solution, dibasic phosphate could rust-proof metals, while tribasic was more used in soaps and detergents.",
"phos.png",
"Phosphoric acid in cola beverages had a negative affect on bones by binding calcium in the stomach and keeping it from being absorbed into the body; women who drank more than three 12 ounce servings of cola a day had 2.3 to 5.1 percent lower bone mineral density in the hip compared to women who consumed less than one serving each day",
"In addition to well-documented risk factors such as diabetes, hypertension, kidney stones and family history, phosphoric acid was a big risk factor for kidney disease. In trial studies, the results also showed among people with kidney stones, people who kept drinking beverages containing phosphoric acid had higher recurrence of kidney stones than those who consumed beverages with citric acid. It was the phosphoric acid in soft drinks that changed urine composition, which leaded to kidney stone formation.",
"Phosphoric and citric acid present in soft drinks lowered the pH of these drinks. Those acidic ingredients weakened the tooth enamel with long exposure time, removing the protective layer (enamel) and exposing the soft dentin. These circumstances lead to tooth decay and hypersensitivity."
));
soda.forEach((chemi)=>{
    document.getElementById("content").append(chemi.section);
});


