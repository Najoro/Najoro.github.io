
//DECLARATIONS
const beurgeur = document.getElementById("beurgeur");
const menu = document.querySelector('.menu');
const header = document.querySelector('header');


let rectBoun = header.getBoundingClientRect()
var largeur = rectBoun.width;
let hauteur = rectBoun.height;
let newElement = document.createElement('div');

newElement.style.width = largeur + 'px';
newElement.style.height = hauteur + "px";

//FONCTIONS

let showMenu = function(){
     beurgeur.classList.toggle('activeJS');
     menu.classList.toggle('showMenu');
}

let scrollY = function(){
     var supportPageOffset = window.pageXOffset !== undefined;
     var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
     return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
}
let haut =rectBoun.top + scrollY();

let headerFixed = function (){
     let hasScroll = header.classList.contains('fixed')
     if(scrollY() > haut && !hasScroll){
          header.classList.add('fixed');
          document.body.insertBefore(newElement, header.nextElementSibling );
          
     }
     else if(scrollY() <= haut && hasScroll){
          header.classList.remove('fixed');
          header.parentNode.removeChild(newElement);
     }
}
// APPEL

//  voir le menu si on click sur l'icone beurgeur responsive
beurgeur.addEventListener("click", showMenu,true);

// le menu est fixer sur le top de la page si on scrolle 
window.addEventListener('scroll', headerFixed) 
