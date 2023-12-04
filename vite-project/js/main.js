
import{everything} from "./everything";
import { DOMSelectors } from "./dom";

function makeCards(arr){
  DOMSelectors.cardList.innerHTML = "";
    arr.forEach((pet)=> {
    const newObject = document.createElement("div");
    newObject.innerHTML = 
    `
    <h2 class="card-title>${pet.name}</h2>
    <img src="${pet.petimage}" alt="picture" class="card-img">
    <h3 class="card-price">${pet.price}</h3>
    `
    newObject.classList.add("card")
    DOMSelectors.cardList.appendChild(newObject)
  })};

makeCards(everything)

DOMSelectors.darkMode.addEventListener("click", function(event){
  event.preventDefault()
  DOMSelectors.body.classList.add("dark")
  DOMSelectors.body.classList.remove("light")
})

DOMSelectors.lightMode.addEventListener("click", function(event){
  event.preventDefault()
  DOMSelectors.body.classList.add("light")
  DOMSelectors.body.classList.remove("dark")
})

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
