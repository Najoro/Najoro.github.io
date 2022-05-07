
/**
 si on click su le lien
     on retire la class active de n'import quelle element
     ajouter la class active de l'element a click

     on retire l'elment qui a la class contenaire-active
     on ajouter le contenue correspondant au menu
 */


(function () {
     const as = document.querySelectorAll('.menu a');
     const boxs = document.querySelectorAll('.box-contenaire');

     boxs.forEach((box)=> {
          box.classList.add('desactive')
     })
     as.forEach((a)=> {
          a.addEventListener('click', (e) => {
               const active = a.parentElement.querySelector('.active');
               let attribute = document.querySelector( a.getAttribute('href'));
          
               //on retire la class active de n'import quelle element
               active.classList.remove('active');

               // ajouter la class active de l'element a click
               if(!a.classList.contains('click')){
                    a.classList.add('active');
               }
               // attribute.parentElement.children.add('desactive')
               // attribute.classList.remove('desactive');
          })
     })
})();