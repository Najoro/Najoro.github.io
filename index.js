const beurgeur = document.getElementById("beurgeur");
const menu = document.querySelector('.menu');
const header = document.querySelector('header');
let liens = document.querySelectorAll('a#external');

//--------------------------------------------------------------------------------------------------------------------------------
// block alert si on click
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
//--------------------------------------------------------------------------------------------------------------------------------
// voir le minue si on click
let showMenu = function(){
     beurgeur.classList.toggle('activeJS');
     menu.classList.toggle('visibleJS');
     header.classList.toggle('scaleJS');
}
beurgeur.addEventListener("click", showMenu);
//--------------------------------------------------------------------------------------------------------------------------------
//menu fixed si on scroll la fenetre
//fonction
let scrollY = function(){
     var supportPageOffset = window.pageXOffset !== undefined;
     var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
     return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
}
let rectBoun = header.getBoundingClientRect()
let haut =rectBoun.top + scrollY();
var largeur = rectBoun.width;
let hauteur = rectBoun.height;
let newElement = document.createElement('div');

newElement.style.width = largeur + 'px';
newElement.style.height = hauteur + "px"

let headerFixed = function (){
     let hasScroll = header.classList.contains('fixed')
     if(scrollY() > haut && !hasScroll){
          header.classList.add('fixed');
          header.parentNode.insertBefore(newElement, header.nextElementSibling );
          
     }
     else if(scrollY() <= haut && hasScroll){
          header.classList.remove('fixed');
          header.parentNode.removeChild(newElement)
     }
}
window.addEventListener('scroll', headerFixed) 
