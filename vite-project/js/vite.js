import "../css/style.css"
import{allpets} from "./store";

const DOMSelectors = {
    allpets: document.querySelector(".allpets"),
    dawgs: document.querySelector(".dawgs"),
    meow: document.querySelector(".meow"),
    chirp: document.querySelector(".chirp"),
};

document.querySelector(".themes").addEventListener("click", function(){
    if (document.body.classList.contains("light")){
        document.body.classList.add("dark")
        document.body.remove("light")
    } else{
        document.body.classList.add("light")
        document.body.classList.remove("dark")
    }
})

console.log(allpets);
