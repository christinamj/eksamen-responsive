let side = {};
let indhold;
const insightsurl = "http://csmedier.dk/responsive-wp/wordpress/wp-json/wp/v2/featured/";
let urlParams = new URLSearchParams(window.location.search);
let featuredinsight = urlParams.get("featuredinsight");
console.log(featuredinsight);

window.addEventListener("load", start);

function start() {
  hentJson();
}

async function hentJson() {
  const url = insightsurl + featuredinsight;

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
  const container = document.querySelector(".model");
  container.querySelector(".article-header").textContent = article.header;
  container.querySelector("h4").textContent = article.subhead;
  container.querySelector(".article-sideimg").src = article.billede.guid;
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
  container.querySelector("a").href = article.link;
}

//tilbageknap:
// document.querySelector(".luk").addEventListener("click", () => history.back());
