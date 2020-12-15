let content2;
const latesturl2 = "http://csmedier.dk/responsive-wp/wordpress/wp-json/wp/v2/latestcases/";
let urlParams = new URLSearchParams(window.location.search);
let latestcase = urlParams.get("latestcase");
console.log(latestcase);

window.addEventListener("load", start)

function start (){
    hentJson();

}

//hent JSON fil enkelt cykel i asynkron function
async function hentJson() {
    const url = latesturl2 + latestcase;

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
    const container = document.querySelector(".featuredcase-temp");
    container.querySelector(".brand-name").textContent = article.brand;
   container.querySelector(".long-header").textContent = article.longheader;
   container.querySelector(".number-one").textContent = article.numberone;
   container.querySelector(".number-two").textContent = article.numbertwo;
   container.querySelector(".number-three").textContent = article.numberthree;
   container.querySelector(".desc-one").textContent = article.descriptionone;
   container.querySelector(".desc-two").textContent = article.descriptiontwo;
   container.querySelector(".desc-three").textContent = article.descriptionthree;
   container.querySelector(".thechallenge").textContent = article.challenge;
   container.querySelector(".thesolution").textContent = article.solution;
   container.querySelector(".quote").textContent = article.quote;
   container.querySelector(".by").textContent = "- " + article.referenceby;
   container.querySelector(".case-img").src = article.picturetop.guid;
   container.querySelector(".case-img-2").src = article.picturebottom.guid;
   container.querySelector("a").href = article.link;
//    container.querySelector(".sec-first").textContent = article.text;
//    container.querySelector(".head-1").textContent = article.firstheader;
//    container.querySelector(".sec-1").textContent = article.firstsection;
//    container.querySelector(".head-2").textContent = article.secondheader;
//    container.querySelector(".sec-2").textContent = article.secondsection;
//    container.querySelector(".head-3").textContent = article.thirdheader;
//    container.querySelector(".sec-3").textContent = article.thirdsection;
//    container.querySelector(".head-4").textContent = article.fourthheader;
//    container.querySelector(".sec-4").textContent = article.fourthsection;
//    container.querySelector(".head-5").textContent = article.fifthhheader;
//    container.querySelector(".sec-5").textContent = article.fifthsection;
//    container.querySelector(".head-6").textContent = article.sixthhheader;
//    container.querySelector(".sec-6").textContent = article.sixthsection;
//    container.querySelector(".head-7").textContent = article.seventhhheader;
//    container.querySelector(".sec-7").textContent = article.seventhsection;
}
