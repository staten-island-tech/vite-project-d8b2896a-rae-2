import{everything} from "./everything";
import "../style.css";

const DOMSelectors = {
  container: document.querySelector("#container"),
  cardList: document.querySelector(".cardList"),
  body: document.querySelector(".body"),
  everything: document.querySelector(".everything"),
  dark: document.querySelector(".dark"),
  light: document.querySelector(".light"),
  dawg: document.querySelector(".dawg"),
  meow: document.querySelector(".meow"),
  chirp: document.querySelector(".chirp"),

};

function makeCards(arr){
  DOMSelectors.cardList.innerHTML = "";
    arr.forEach((pet)=> {
    const newObject = document.createElement("div");
    newObject.innerHTML = 
    `
    <h2 class="card-title>${pet.name}</h2>
    <img src="${pet.petimage}" alt="pic" class="card-img">
    <h3 class="card-price">${pet.price}</h3>
    `
    newObject.classList.add("card")
    DOMSelectors.cardList.appendChild(newObject)
  })};

makeCards(everything)

DOMSelectors.dawg.addEventListener("click", function(event){
  event.preventDefault()
  dogs()
});

DOMSelectors.meow.addEventListener("click", function(event){
  event.preventDefault()
  cats()
});

DOMSelectors.chirp.addEventListener("click", function(event){
  event.preventDefault()
  birds()
});

DOMSelectors.everything.addEventListener("click", function(event){
  event.preventDefault()
  makeCards(everything)
});

DOMSelectors.dark.addEventListener("click", function(event){
  event.preventDefault()
  DOMSelectors.body.classList.add("light")
  DOMSelectors.body.classList.add("dark")
})
DOMSelectors.light.addEventListener("click", function(event){
  event.preventDefault()
  DOMSelectors.body.classList.add("light")
  DOMSelectors.body.classList.add("dark")
})

function dogs(){
  const doggos = everything.filter((breed)=> breed.type.includes("dawg"))
  makeCards(doggos)
}

function cats(){
  const kites = everything.filter((breed)=> breed.type.includes("meow"))
  makeCards(kites)
}
function birds(){
  const chirpers = everything.filter((breed)=> breed.type.includes("chirp"))
  makeCards(chirpers)
}


function theme(){
DOMSelectors.document.querySelector("#themes").addEventListener("click", function(){
  if (document.body.classList.contains(".dark")){
      document.body.classList.add(".light")
      document.body.remove(".dark")
  } else{
      document.body.classList.add(".dark")
      document.body.classList.remove(".light")
  }
})
}

theme()
