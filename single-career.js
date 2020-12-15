let side = {};
let indhold;
const featuredurl = "http://csmedier.dk/responsive-wp/wordpress/wp-json/wp/v2/position/";
let urlParams = new URLSearchParams(window.location.search);
let position = urlParams.get("position");
console.log(position);

window.addEventListener("load", start)

function start (){
    hentJson();

}

async function hentJson() {
    const url = featuredurl + position;

    //henter data filen
    const myJson = await fetch(url);

    //til singleview
    const article = await myJson.json();
    console.log(article);
    visArticle(article);
}


//Viser single view
function visArticle(article) {
    console.log(article);
    const container = document.querySelector(".container");
    container.querySelector(".header").textContent = article.header;
    container.querySelector(".subhead").textContent = article.header1;
    container.querySelector(".textpart1").textContent = article.textpart1;
    container.querySelector(".header2").textContent = article.header2;
    container.querySelector(".textpart2").textContent = article.textpart2;
    container.querySelector(".header3").textContent = article.header3;
    container.querySelector(".textpart3").textContent = article.textpart3;
    container.querySelector(".header4").textContent = article.header4;
    container.querySelector(".textpart4").innerHTML = article.textpart4;
    container.querySelector(".header5").textContent = article.header5;
    container.querySelector(".textpart5").textContent = article.textpart5;

}
