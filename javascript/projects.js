const projects = document.getElementById('projects');


let add = function(projectName,image) {
  let span = document.createElement('span');
  span.classList.add("composante");
  span.style.background = `${image} no-repeat center/cover`
  span.innerHTML =`
    <div class="language-contenaire"></div>
    <p> ${projectName}</p>
    <div class="btm-contenaire">
      <a href="#" id="external" class="btm-contenue">Source</a>
      <a href="#" id="external" class="btm-contenue">project</a>
    </div>
  `
  projects.appendChild(span);
}


add("Calculatrice","url(../media/calculatrice.png)");
add("Calculatrice","url(../media/calculatrice.png)");
add("Calculatrice","url(../media/calculatrice.png)");
add("Calculatrice","url(../media/calculatrice.png)");
add("Calculatrice","url(../media/calculatrice.png)");
add("Calculatrice","url(../media/calculatrice.png)");
add("Calculatrice","url(../media/calculatrice.png)");
add("Calculatrice","url(../media/calculatrice.png)");
add("Calculatrice","url(../media/calculatrice.png)");
// const composantes = document.querySelectorAll('.composante');
// composantes.forEach((composante)=> {
//   composante.addEventListener("", ()=> {
//     console.log("click");
//   })
// })
