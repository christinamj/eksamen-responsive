let side = {};
let indhold;
const insightsurl = "http://csmedier.dk/responsive-wp/wordpress/wp-json/wp/v2/insights/";
// const featuredurl = "http://csmedier.dk/responsive-wp/wordpress/wp-json/wp/v2/featured/";
let urlParams = new URLSearchParams(window.location.search);
let insight = urlParams.get("insight");
// let featuredinsight = urlParams.get("featuredinsight");
console.log(insight);
// console.log(featuredinsight);

window.addEventListener("load", start)

function start (){
    hentJson();
    // hentJson2();
}

//hent JSON fil enkelt cykel i asynkron function
async function hentJson() {
    const url = insightsurl + insight;

    //henter data filen
    const myJson = await fetch(url);

    //til singleview
    const article = await myJson.json();
    console.log(article);
    visArticle(article);
}

// async function hentJson2() {
//     const url2 = featuredurl + featuredinsight;

//     //henter data filen
//     const myJson2 = await fetch(url2);

//     //til singleview
//     const article2 = await myJson2.json();
//     console.log(article2);
// }

//Viser single view
function visArticle(article) {
    console.log(article);
    const container = document.querySelector(".model");
    container.querySelector(".article-header").textContent = article.header;
   container.querySelector("h4").textContent = article.subhead;
   container.querySelector(".sec-first").textContent = article.text;
   container.querySelector(".head-1").textContent = article.firstheader;
   container.querySelector(".sec-1").textContent = article.firstsection;
   container.querySelector(".head-2").textContent = article.secondheader;
   container.querySelector(".sec-2").textContent = article.secondsection;
   container.querySelector(".head-3").textContent = article.thirdheader;
   container.querySelector(".sec-3").textContent = article.thirdsection;
   container.querySelector(".head-4").textContent = article.fourthheader;
   container.querySelector(".sec-4").textContent = article.fourthsection;
   container.querySelector(".head-5").textContent = article.fifthhheader;
   container.querySelector(".sec-5").textContent = article.fifthsection;
   container.querySelector(".head-6").textContent = article.sixthhheader;
   container.querySelector(".sec-6").textContent = article.sixthsection;
   container.querySelector(".head-7").textContent = article.seventhhheader;
   container.querySelector(".sec-7").textContent = article.seventhsection;
}

// function visfeaturedArticle(article2){
//     console.log(article2);
//     const container = document.querySelector(".model");
//     container.querySelector(".article-header").textContent = article2.header;
//    container.querySelector("h4").textContent = article2.subhead;
//    container.querySelector(".sec-first").textContent = article2.text;
//    container.querySelector(".head-1").textContent = article2.firstheader;
//    container.querySelector(".sec-1").textContent = article2.firstsection;
//    container.querySelector(".head-2").textContent = article2.secondheader;
//    container.querySelector(".sec-2").textContent = article2.secondsection;
//    container.querySelector(".head-3").textContent = article2.thirdheader;
//    container.querySelector(".sec-3").textContent = article2.thirdsection;
//    container.querySelector(".head-4").textContent = article2.fourthheader;
//    container.querySelector(".sec-4").textContent = article2.fourthsection;
//    container.querySelector(".head-5").textContent = article2.fifthhheader;
//    container.querySelector(".sec-5").textContent = article2.fifthsection;
//    container.querySelector(".head-6").textContent = article2.sixthhheader;
//    container.querySelector(".sec-6").textContent = article2.sixthsection;
//    container.querySelector(".head-7").textContent = article2.seventhhheader;
//    container.querySelector(".sec-7").textContent = article2.seventhsection;
// }


//tilbageknap:
// document.querySelector(".luk").addEventListener("click", () => history.back());
