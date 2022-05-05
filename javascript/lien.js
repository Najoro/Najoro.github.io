// block alert si on click
let liens = document.querySelectorAll('a#external');
let symbol = document.querySelector('.symbol');

console.log(symbol);

for(var i=0 ; i < liens.length ; i++){

     var lien = liens[i];
     lien.addEventListener("mouseenter", ()=> {
          symbol.classList.add('rotate');
          setTimeout(() => {
               symbol.classList.remove('rotate');
          }, 500);
     })
     lien.addEventListener('click', (e)=> {

          e.stopPropagation();
          var answer = window.confirm('voulez-vous vraiment ouvrir ce lien ?');
          if(!answer){
               e.preventDefault();
          }
         
     })
   
}