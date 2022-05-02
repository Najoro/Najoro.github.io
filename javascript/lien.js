// block alert si on click
let liens = document.querySelectorAll('a#external');

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