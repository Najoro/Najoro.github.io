// block alert si on click
let liens = document.querySelectorAll('a#external');
let links = document.querySelectorAll('a');
let symbol = document.querySelector('.symbol');
const numero = document.querySelector('.phone');
const num = document.querySelector('.num');


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
links.forEach((link)=> {
     link.addEventListener("mouseenter", ()=> {
          symbol.classList.add('rotate');
          setTimeout(() => {
               symbol.classList.remove('rotate');
          }, 500);
     })
})

numero.addEventListener('click', ()=> {
     num.textContent = "034 31 058 82"
     setTimeout(() => {
          num.textContent = "*** ** *** **"
     }, 4000);
})