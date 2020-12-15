let side = {};
let indhold;
let indholdtwo;
let filter = "Alle";
const insightsurl = "http://csmedier.dk/responsive-wp/wordpress/wp-json/wp/v2/insights";
const featuredurl = "http://csmedier.dk/responsive-wp/wordpress/wp-json/wp/v2/featured";

document.addEventListener("DOMContentLoaded", start);

function start(){
    hentJson2();
}

async function hentJson2() {
    const url2 = featuredurl + "?per_page=100";

    //henter data filen
    const myJson2 = await fetch(url2);

    //den hentee data skal tolkes som json
    indholdtwo = await myJson2.json();

    //kald funktion der viser data som json
    console.log(indholdtwo);
    visIndholdtwo();
   
}



function visIndholdtwo() {

    const liste2 = document.querySelector("#featured-section");
    liste2.textContent = "";


        indholdtwo.forEach((one) => {
   
        
            const klon = document.querySelector(".featured-temp").cloneNode(true).content;

            //sætter en atribut på alle cyklerne, så den henter cyklernes id fra json.
            klon.querySelector(".article-con").setAttribute("data-id", one.id);

            klon.querySelector("h3").textContent = one.headenglish;
            klon.querySelector("p").innerHTML = one.subheadenglish;
            klon.querySelector("img").src = one.billede.guid;
            //                        klon.querySelector(".kategori").innerHTML = enkelt.kategori;
            liste2.appendChild(klon);

            //eventlistener som går til singleview og kalder url-variablens id
            // liste.lastElementChild.addEventListener("click", () => {
            //     location.href = "singleview.html?model=" + enkelt.id;
            // });
            liste2.lastElementChild.addEventListener("click", () => {
                location.href = "temp-featured.html?featuredinsight=" + one.id;
                console.log(one.id);
            });
        
    });
}