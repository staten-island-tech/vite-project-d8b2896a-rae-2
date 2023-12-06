
import{everything} from "./everything";
import { DOMSelectors } from "./dom";

function makeCards(arr){
  DOMSelectors.cardList.innerHTML = "";
    arr.forEach((pet)=> {
    const newObject = document.createElement("div");
    newObject.innerHTML = 
    `
    <h2 class="card-title">${pet.name}</h2>
    <img src="${pet.petimage}" alt="picture" class="card-img">
    <h3 class="card-price">${pet.breed}</h3>
    <h3 class="card-price">${pet.price}</h3>
    `
    newObject.classList.add("card")
    DOMSelectors.cardList.appendChild(newObject)
  })};

makeCards(everything)

//efficient code that doesn't work.
/* function btn(){
  //for each button we add click event handler
  DOMSelectors.buttons.forEach((button)=> button.addEventListener("click", function(){
    //get button text to be used later
    let category = btn.textContent.toLowerCase()
    //create new array by filtering items by category (the button clicked)
    let arr = everything.filter((pet)=>pet.type.includes(category))
    //remove all old cards
    DOMSelectors.cardList.innerHTML = ""
    //passing in new filtered array to put cards on screen
    makeCards(arr)
  }))
}
btn() */


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

