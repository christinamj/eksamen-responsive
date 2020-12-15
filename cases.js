let side2 = {};
let indholdthree;
const featuredurl2 = "http://csmedier.dk/responsive-wp/wordpress/wp-json/wp/v2/featuredcases";

document.addEventListener("DOMContentLoaded", start);

function start(){
    hentJson();
}

async function hentJson() {
    const url = featuredurl2 + "?per_page=100";

    //henter data filen
    const myJson = await fetch(url);

    //den hentee data skal tolkes som json
    indholdthree = await myJson.json();

    //kald funktion der viser data som json
    console.log(indholdthree);
    visIndhold();
}


function visIndhold() {
    const liste = document.querySelector(".section-cas-col2");
    liste.textContent = "";

    indholdthree.forEach((enkelt) => {
   
        
                const klon = document.querySelector(".featured-cases").cloneNode(true).content;

                //sætter en atribut på alle insights, så den henter deres id fra json.
                klon.querySelector(".article-feat").setAttribute("data-id", enkelt.id);
                
                klon.querySelector("h3").textContent = enkelt.header;
                klon.querySelector(".feat-subhead").textContent = enkelt.subhead;
                klon.querySelector(".case-img-1").src = enkelt.overviewpic.guid;
              

                //                        klon.querySelector(".kategori").innerHTML = enkelt.kategori;
                liste.appendChild(klon);

                // eventlistener som går til singleview og kalder url-variablens id
                liste.lastElementChild.addEventListener("click", () => {
                    location.href = "case-template.html?featuredcase=" + enkelt.id;
                    console.log(enkelt.id);
                });
            
        });
}


