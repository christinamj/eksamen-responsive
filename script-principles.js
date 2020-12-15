window.addEventListener("load", start);
let goals = "";
let data ="";
let people = "";
let concept = "";
let tech = "";
let customers = "";

function start(){
  fetchModel();
  document.querySelector(".close-model").classList.add("hide");
  document.querySelector(".close-model").addEventListener("click", endModel);
}

async function fetchModel(){
  let response = await fetch("img/principle-green.svg");
  let mySvgData = await response.text();
  document.querySelector(".the-model").innerHTML = mySvgData;
  listen();
}

function listen(){
  document.querySelectorAll("#goals-g").forEach(link => {
    link.addEventListener("click", startGoals);
  });
  document.querySelectorAll("#customer-g").forEach(link => {
    link.addEventListener("click", startCustomers);
  });
  document.querySelectorAll("#people-g").forEach(link => {
    link.addEventListener("click", startPeople);
  });
  document.querySelectorAll("#data-g").forEach(link => {
    link.addEventListener("click", startData);
  });
  document.querySelectorAll("#tech-g").forEach(link => {
    link.addEventListener("click", startTech);
  });
  document.querySelectorAll("#concept-g").forEach(link => {
    link.addEventListener("click", startConcept);
  });
}

function startGoals(){
  console.log("goals1")
  document.querySelector(".the-model").classList.remove("transform-back");
  document.querySelector(".the-model").classList.add("transform-model");
  document.querySelectorAll("svg #goals-g path").forEach(link => {
    link.style.fill = "#668989";
  });

  document.querySelector(".section-principles-text").classList.add("hide");
  goals = "true";
  exploreModel();
}

function startCustomers(){
  document.querySelectorAll("svg #customer-g path").forEach(link => {
    link.style.fill = "#668989";
  });
  document.querySelector(".the-model").classList.remove("transform-back");
  document.querySelector(".the-model").classList.add("transform-model");
  document.querySelector(".section-principles-text").classList.add("hide");
  customers = "true";
  exploreModel();
}

function startConcept(){
  document.querySelectorAll("svg #concept-g path").forEach(link => {
    link.style.fill = "#668989";
  });
  document.querySelector(".the-model").classList.remove("transform-back");
  document.querySelector(".the-model").classList.add("transform-model");
  document.querySelector(".section-principles-text").classList.add("hide");
  concept = "true";
  exploreModel();
}

function startPeople(){
  document.querySelectorAll("svg #people-g path").forEach(link => {
    link.style.fill = "#668989";
  });
  document.querySelector(".the-model").classList.remove("transform-back");
  document.querySelector(".the-model").classList.add("transform-model");
  document.querySelector(".section-principles-text").classList.add("hide");
  people = "true";
  exploreModel();
}

function startData(){
  document.querySelectorAll("svg #data-g path").forEach(link => {
    link.style.fill = "#668989";
  });
  document.querySelector(".the-model").classList.remove("transform-back");
  document.querySelector(".the-model").classList.add("transform-model");
  document.querySelector(".section-principles-text").classList.add("hide");
  data = "true";
  exploreModel();
}

function startTech(){
  document.querySelectorAll("svg #tech-g path").forEach(link => {
    link.style.fill = "#668989";
  });
  document.querySelector(".the-model").classList.remove("transform-back");
  document.querySelector(".the-model").classList.add("transform-model");
  document.querySelector(".section-principles-text").classList.add("hide");
  tech = "true";
  exploreModel();
}

function exploreModel(){
  document.querySelectorAll(".model-txt").forEach(text => {
    text.classList.add("hide")
  });

  document.querySelector(".close-model").classList.remove("hide");
  document.querySelector(".close-model").addEventListener("click", endModel);
  
  if(goals=="true"){
    console.log("clicked goals second")
    document.querySelectorAll("svg #goals-g path").forEach(link => {
      link.style.fill = "#668989";
    });
    document.querySelector("body").addEventListener("click", function(){
      goals ="false"
    })

    document.querySelector(".goals-appear").classList.remove("hide");
    document.querySelector(".goals-appear").classList.add("appear");
  }

  else if(customers=="true"){
    console.log("clicked customers second")
    document.querySelectorAll("svg #customer-g path").forEach(link => {
      link.style.fill = "#668989";
    });
    document.querySelector(".customer-appear").classList.remove("hide");
    document.querySelector(".customer-appear").classList.add("appear");
    document.querySelector("body").addEventListener("click", function(){
      customers ="false"
    })
  }

  else if(concept=="true"){
    console.log("clicked concept second")
    document.querySelectorAll("svg #concept-g path").forEach(link => {
      link.style.fill = "#668989";
    });
    document.querySelector(".concept-appear").classList.remove("hide");
    document.querySelector(".concept-appear").classList.add("appear");
    document.querySelector("body").addEventListener("click", function(){
      concept ="false"
    })
  }

  else if(people=="true"){
    console.log("clicked people second")
    document.querySelectorAll("svg #people-g path").forEach(link => {
      link.style.fill = "#668989";
    });
    document.querySelector(".people-appear").classList.remove("hide");
    document.querySelector(".people-appear").classList.add("appear");
    document.querySelector("body").addEventListener("click", function(){
      people ="false"
    })
  }

  else if(tech=="true"){
    console.log("clicked tech second")
    document.querySelectorAll("svg #tech-g path").forEach(link => {
      link.style.fill = "#668989";
    });
    document.querySelector(".tech-appear").classList.remove("hide");
    document.querySelector(".tech-appear").classList.add("appear");
    document.querySelector("body").addEventListener("click", function(){
      tech ="false"
    })
  }

  else if(data=="true"){
    console.log("clicked data second")
    document.querySelectorAll("svg #data-g path").forEach(link => {
      link.style.fill = "#668989";
    });
    document.querySelector(".data-appear").classList.remove("hide");
    document.querySelector(".data-appear").classList.add("appear");
    document.querySelector("body").addEventListener("click", function(){
      data ="false"
    })
  }

  document.querySelector(".close-model").addEventListener("click", endModel);

  document.querySelectorAll("#goals-g").forEach(link => {
    link.addEventListener("click",  modelRunning);
  });
  document.querySelectorAll("#customer-g").forEach(link => {
    link.addEventListener("click",  modelRunning);
  });
  document.querySelectorAll("#people-g").forEach(link => {
    link.addEventListener("click",  modelRunning);
  });
  document.querySelectorAll("#data-g").forEach(link => {
    link.addEventListener("click",  modelRunning);
  });
  document.querySelectorAll("#tech-g").forEach(link => {
    link.addEventListener("click",  modelRunning);
  });
  document.querySelectorAll("#concept-g").forEach(link => {
    link.addEventListener("click",  modelRunning);
  });
}

function modelRunning (){
  console.log("model running")
  document.querySelectorAll("#goals, #data, #people, #tech, #customers, #concept").forEach(one => {
    one.style.fill = "#375759";
  });
  document.querySelector(".close-model").addEventListener("click", endModel);
  document.querySelectorAll(".model-txt").forEach(text => {
    text.classList.add("hide")
  });
  if(goals=="true"){
    console.log("clicked goals")
    document.querySelector("#goals").style.fill = "#668989";
    document.querySelector(".goals-appear").classList.remove("hide");
    document.querySelector(".goals-appear").classList.add("appear");
    document.querySelector("body").addEventListener("click", function(){
      goals ="false"
    })
  }

  else if(customers=="true"){
    console.log("clicked customers")
    document.querySelector("#customers").style.fill = "#668989";
    document.querySelector(".customer-appear").classList.remove("hide");
    document.querySelector(".customer-appear").classList.add("appear");
    document.querySelector("body").addEventListener("click", function(){
      customers ="false"
    })
  }

  else if(concept=="true"){
    console.log("clicked concept")
    document.querySelector("#concept").style.fill = "#668989";
    document.querySelector(".concept-appear").classList.remove("hide");
    document.querySelector(".concept-appear").classList.add("appear");
    document.querySelector("body").addEventListener("click", function(){
      concept ="false"
    })
  }

  else if(people=="true"){
    console.log("clicked people")
    document.querySelector("#people").style.fill = "#668989";
    document.querySelector(".people-appear").classList.remove("hide");
    document.querySelector(".people-appear").classList.add("appear");
    document.querySelector("body").addEventListener("click", function(){
      people ="false"
    })
  }

  else if(tech=="true"){
    console.log("clicked tech")
    document.querySelector("#tech").style.fill = "#668989";
    document.querySelector(".tech-appear").classList.remove("hide");
    document.querySelector(".tech-appear").classList.add("appear");
    document.querySelector("body").addEventListener("click", function(){
      tech ="false"
    })
  }

  else if(data=="true"){
    console.log("clicked data")
    document.querySelector("#data").style.fill = "#668989";
    document.querySelector(".data-appear").classList.remove("hide");
    document.querySelector(".data-appear").classList.add("appear");
    document.querySelector("body").addEventListener("click", function(){
      data ="false"
    })

  }

  // document.querySelector(".section-principles-col1").addEventListener("click", endModel);
  document.querySelector(".close-model").addEventListener("click", endModel);

}

function endModel(){
  document.querySelector(".close-model").classList.add("hide");
  console.log("end");
  data = "false";
  people = "false";
  tech = "false";
  concept = "false";
  goals = "false";
  customers = "false";

  document.querySelector(".the-model").classList.add("transform-back");
  document.querySelector(".the-model").classList.remove("transform");

  

  document.querySelector("#goals").style.fill = "#668989";

  document.querySelectorAll("#goals, #data, #people, #tech, #customers, #concept").forEach(one => {
    one.style.fill = "#375759";
  });
  document.querySelector(".section-principles-text").classList.remove("hide");
  document.querySelectorAll(".model-txt").forEach(txt => {
    txt.classList.add("fade-out");
    txt.classList.remove("appear");

    txt.classList.add("hide");
  });
  start()
}