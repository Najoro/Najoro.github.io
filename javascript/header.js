const childsContainer = document.querySelector(".contenaire").childNodes;
const Menu = document.querySelector(".menu");
const as = document.querySelectorAll('.menu a');
const date = document.querySelector('.date');

// function DateNow(){
//   let Datenow = new Date()
//   console.log(Datenow.toISOString());
//   date.innerHTML = `
//   ${Datenow.toISOString().split('T')[1].split(".")[0]}
//   `
// }
// DateNow();

console.log(childsContainer.nodeType);

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
      if (element.nodeType !== 3) {
       if (element.id == cur) {
            element.classList.remove(C) 
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
    let curentElement = child.textContent.toLowerCase();
    handleActive(childsContainer, "desactive", curentElement);
  });
});
