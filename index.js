

const beurgeur = document.getElementById("beurgeur-menu")
const menu = document.querySelector('.menu-bare')

beurgeur.addEventListener("click", () => {
     beurgeur.classList.toggle('active')
     menu.classList.toggle('visible')
  
})

document.addEventListener('scroll', () => {
     if(window.scrollY > 0){
          menu.style.position ="fixed"
          menu.style.top = "85px";
     }
})