let side = {};
let indhold;
let indholdtwo;
let filter = "Alle";
const insightsurl = "http://csmedier.dk/responsive-wp/wordpress/wp-json/wp/v2/insights";

const rowurl = "http://csmedier.dk/responsive-wp/wordpress/wp-json/wp/v2/insightrow";
const featuredurl = "http://csmedier.dk/responsive-wp/wordpress/wp-json/wp/v2/featured";

document.addEventListener("DOMContentLoaded", start);

function start(){
    hentJson();
    hentJson2();
    hentJson3();
}

async function hentJson() {
    const url = insightsurl + "?per_page=100";

    //henter data filen
    const myJson = await fetch(url);

    //den hentee data skal tolkes som json
    indhold = await myJson.json();

    //kald funktion der viser data som json
    console.log(indhold);
    visIndhold();
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

async function hentJson3() {
    const url3 = rowurl + "?per_page=100";

    //henter data filen
    const myJson3 = await fetch(url3);

    //den hentee data skal tolkes som json
    indholdthree = await myJson3.json();

    //kald funktion der viser data som json
    console.log(indholdthree);
    visIndholdthree();
   
}

function visIndhold() {
    const liste = document.querySelector("#indsigter-section");
    liste.textContent = "";

    indhold.forEach((enkelt) => {
   
        
                const klon = document.querySelector(".listeview").cloneNode(true).content;

                //sætter en atribut på alle insights, så den henter deres id fra json.
                klon.querySelector(".article-text").setAttribute("data-id", enkelt.id);

                klon.querySelector("h3").textContent = enkelt.headerenglish;

                //                        klon.querySelector(".kategori").innerHTML = enkelt.kategori;
                liste.appendChild(klon);

                //eventlistener som går til singleview og kalder url-variablens id
                liste.lastElementChild.addEventListener("click", () => {
                    location.href = "temp-article.html?insight=" + enkelt.id;
                    console.log(enkelt.id);
                });
            
        });
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

function visIndholdthree() {

    const liste3 = document.querySelector("#insights-row");
    liste3.textContent = "";


        indholdthree.forEach((row) => {
   
        
            const klon = document.querySelector(".row-temp").cloneNode(true).content;

            //sætter en atribut på alle cyklerne, så den henter cyklernes id fra json.
            klon.querySelector(".article-con").setAttribute("data-id", row.id);

            klon.querySelector("h3").textContent = row.headerenglish;
            klon.querySelector("p").innerHTML = row.subheadenglish;
            klon.querySelector("img").src = row.billede.guid;
            //                        klon.querySelector(".kategori").innerHTML = enkelt.kategori;
            liste3.appendChild(klon);

            //eventlistener som går til singleview og kalder url-variablens id
            // liste.lastElementChild.addEventListener("click", () => {
            //     location.href = "singleview.html?model=" + enkelt.id;
            // });
            liste3.lastElementChild.addEventListener("click", () => {
                location.href = "temp-featured.html?featuredinsight=" + row.id;
                console.log(one.id);
            });
        
    });
}






