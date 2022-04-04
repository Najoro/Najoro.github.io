const beurgeur = document.getElementById("beurgeur");
const menu = document.querySelector('.menu-bare');
const header = document.querySelector('header');
var liens = document.querySelectorAll('a#external'); 


beurgeur.addEventListener("click", () => {
     beurgeur.classList.toggle('active')
     menu.classList.toggle('visible')
     header.classList.toggle('scale')
})

// lien-----------------------------------------------------------------------------
for(var i=0 ; i < liens.length ; i++){

     var lien = liens[i];

     lien.addEventListener('click', (e)=> {
          e.stopPropagation();
          var answer = window.confirm('voulez-vous vraiment ouvrir ce lien ?');
          if(!answer){
               e.preventDefault();
          }
     })
}
