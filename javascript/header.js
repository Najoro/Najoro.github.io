
const childsContainer = document.querySelector(".contenaire").childNodes;
const Menu = document.querySelector(".menu");
const as = document.querySelectorAll('.menu a');


as.forEach((a)=> {
  a.addEventListener('click', (e) => {
       const active = a.parentElement.querySelector('.active')
  
       //on retire la class active de n'import quelle element
       active.classList.remove('active');

       // ajouter la class active de l'element a click
       if(!a.classList.contains('click')){
            a.classList.add('active');
       }
  })
})

Menu.childNodes.forEach((child) => {

  let handleActive = (childs, C, cur) => {
    childs.forEach((element) => {
      if (element.nodeType != 3) {
       if (element.id == cur || element==cur) {
            element.classList.remove(C) 
            console.log(element);
       }
        else {
          if (!element.classList.contains(C)) {
            element.classList.add(C);
          }
        }
      }
    });
  };
  
  child.addEventListener("click", (e) => {
    let curentElement = e.target.innerText.toLowerCase();
    handleActive(childsContainer, "desactive", curentElement);
  });
});