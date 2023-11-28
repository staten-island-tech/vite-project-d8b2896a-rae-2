import "./style.css";
import{everything} from "./store";
import { DOMselectors } from "./dom";

function theme(){
DOMselectors.document.querySelector(".themes").addEventListener("click", function(){
  if (document.body.classList.contains(".dark")){
      document.body.classList.add(".light")
      document.body.remove(".dark")
  } else{
      document.body.classList.add(".dark")
      document.body.classList.remove(".light")
  }
})
}
function populate(arr){
  arr.forEach((el)=> DOMselectors.parent.insertAdjacentHTML(
    "beforeend",
    `<div class='everything'>
    <h2 id="name" class="name">${el.name}</h2>
    <img id="${el.name}" src="${el.image}" class="image">
    <h3 id="price" class="name">$${el.price}</h3>
    </div>`
  ))
}
function btn(){
  //for each button we add click event handler
  DOMselectors.buttons.forEach((btn)=> btn.addEventListener("click", function(){
    //get button text to be used later
    let category = btn.textContent.toLowerCase()
    //create new array by filtering items by category (the button clicked)
    let newArr = everything.filter((el)=>el.type.includes(category))
    //remove all old cards
    DOMselectors.parent.innerHTML = ""
    //passing in new filtered array to put cards on screen
    populate(newArr)
  }))
}
populate(everything)
btn()
theme()

//make an event to sow all cards whenever user refeshes page
//then make another event to show just a couple cards when a button is clicked

