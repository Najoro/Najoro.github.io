

const beurgeur = document.getElementById("beurgeur-menu")
const menu = document.querySelector('.menu-bare')

beurgeur.addEventListener("click", () => {
     beurgeur.classList.toggle('active')
     menu.classList.toggle('visible')
  
})

