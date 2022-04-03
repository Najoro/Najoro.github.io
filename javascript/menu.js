const beurgeur = document.getElementById("beurgeur");
const menu = document.querySelector('.menu-bare');
const header = document.querySelector('header');

console.log(header);

beurgeur.addEventListener("click", () => {
     beurgeur.classList.toggle('active')
     menu.classList.toggle('visible')
     header.classList.toggle('scale')
})
