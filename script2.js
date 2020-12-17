window.addEventListener("load", start);
window.addEventListener("scroll", scrollFunction);
let currentURL = window.location.href;

function start() {
  document.querySelector("#close").addEventListener("click", closeBurgerMenu);
  document.querySelector(".burgermenu").addEventListener("click", burgerMenu);
  document.querySelectorAll("nav a").forEach((p) => {
    if (currentURL.indexOf(p.getAttribute("href")) !== -1) {
      p.classList.add("active");
    }
  });

  scrollFunction();
  getFooter();
}

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("site-header").style.backgroundColor = "white";
    document.querySelector(".burgermenu").style.backgroundImage = "url('img/burgermenu-black.svg')";
    document.getElementById("logo").style.backgroundImage = "url('img/responsive-black.svg')";
    document.querySelectorAll(".menupoint").forEach((link) => {
      link.style.color = "black";

      document.querySelector(".dropdown-content").style.backgroundColor = "white";
      document.querySelector(".dropdown-content1").style.backgroundColor = "white";
      link.style.fontSize = "15px";
    });
    document.querySelectorAll("nav a").forEach((p) => {
      if (currentURL.indexOf(p.getAttribute("href")) !== -1) {
        p.classList.add("active-black");
      }
    });
  } else {
    document.getElementById("site-header").style.backgroundColor = "transparent";
    document.querySelector(".burgermenu").style.backgroundImage = "url('img/burger-white.svg')";
    document.getElementById("logo").style.backgroundImage = "url('img/responsive-white.svg')";
    document.querySelector(".dropdown-content").style.backgroundColor = "transparent";
    document.querySelector(".dropdown-content1").style.backgroundColor = "transparent";
    document.querySelectorAll(".menupoint").forEach((link) => {
      link.style.color = "white";
      link.style.fontSize = "18px";
    });
    document.querySelectorAll("nav a").forEach((p) => {
      if (currentURL.indexOf(p.getAttribute("href")) !== -1) {
        p.classList.remove("active-black");
      }
    });
  }
}
start();

function burgerMenu() {
  document.querySelector("header").classList.add("hide");
  document.querySelector("#burger").classList.remove("hide");
}

function closeBurgerMenu() {
  document.querySelector("#burger").classList.add("hide");
  document.querySelector("header").classList.remove("hide");
}

async function getFooter() {
  const responseFooter = await fetch("inc/footer.html");
  const inclusionFooter = await responseFooter.text();
  document.querySelector(".section-footer").innerHTML = inclusionFooter;
}
