const button = document.querySelector(".button")
const links = document.querySelector(".links")
// if(window.innerWidth>=500){
//     dot.classList.remove("dot-section");
// }

button.addEventListener("click", ()=>{
    // console.log(links.classList);
//    const myLinks = links.classList.contains("hide-links");
   if(links.classList.contains("hide-links")){
    links.classList.remove("hide-links");
   }
   else{
    links.classList.add("hide-links");
   }
})