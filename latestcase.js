let content;
const latesturl = "http://csmedier.dk/responsive-wp/wordpress/wp-json/wp/v2/latestcases/";

document.addEventListener("DOMContentLoaded", start);

function start(){
    hentJson4();
}

async function hentJson4() {
    const url3 = latesturl + "?per_page=100";

    //henter data filen
    const myJson4 = await fetch(url3);

    //den hentee data skal tolkes som json
    content = await myJson4.json();

    //kald funktion der viser data som json
    console.log(content);
    showContent();
}


function showContent() {
    const liste = document.querySelector(".model");
    liste.textContent = "";

    content.forEach((latest) => {
   
        
                const klon = document.querySelector(".latestcase-temp").cloneNode(true).content;

                //sætter en atribut på alle insights, så den henter deres id fra json.
                klon.querySelector(".latestcase-article").setAttribute("data-id", latest.id);
                
                klon.querySelector(".header").textContent = latest.header;
                klon.querySelector("p").textContent = latest.subhead;
                klon.querySelector(".section2-image-home").src = latest.overviewpic.guid;
                
        
              

                //                        klon.querySelector(".kategori").innerHTML = latest.kategori;
                liste.appendChild(klon);

                // eventlistener som går til singleview og kalder url-variablens id
                liste.lastElementChild.addEventListener("click", () => {
                    location.href = "temp-latest.html?latestcase=" + latest.id;
                    console.log(latest.id);
                });
            
        });
}