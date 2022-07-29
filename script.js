const searchbarContainerEl=document.querySelector(".search-bar-container");

const magnifierEl = document.querySelector(".magnifier")

searchbarContainerEl.addEventListener("click", ()=>{
    searchbarContainerEl.classList.toggle("active")
})