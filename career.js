let content;
const latesturl = "http://csmedier.dk/responsive-wp/wordpress/wp-json/wp/v2/position/";

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
    const liste = document.querySelector(".position-model");
    liste.textContent = "";

    content.forEach((latest) => {
   
        
                const klon = document.querySelector(".position-temp").cloneNode(true).content;

                //sætter en atribut på alle insights, så den henter deres id fra json.
                klon.querySelector(".position-article").setAttribute("data-id", latest.id);
                
                klon.querySelector(".header").textContent = latest.header;
                klon.querySelector("p").textContent = latest.subhead;
                
        
              

                //                        klon.querySelector(".kategori").innerHTML = latest.kategori;
                liste.appendChild(klon);

                // eventlistener som går til singleview og kalder url-variablens id
                liste.lastElementChild.addEventListener("click", () => {
                    location.href = "temp-position.html?position=" + latest.id;
                    console.log(latest.id);
                });
            
        });
}