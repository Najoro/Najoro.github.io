const projects = document.getElementById("projects");
let bds = [];

let newProject = function (projectName, image,source,project) {
  let span = document.createElement("span");
  span.classList.add("composante");
  projects.appendChild(span);
  span.style.background = `${image} no-repeat center/cover`;
  span.innerHTML = `
    <div class="language-contenaire">nananan</div>
    <p> ${projectName}</p>
    <div class="btm-contenaire">
      <a href="${source}" id="external" class="btm-contenue">Source</a>
      <a href="${project}" id="external" class="btm-contenue">afficher</a>
    </div>
  `;
  span.addEventListener("mouseenter", () => {
    span.childNodes[3].style.visibility ="visible";
  })
  span.addEventListener("mouseleave", () => {
    span.childNodes[3].style.visibility ="hidden";
  })
};

async function reclame_bd(){
  await fetch("bd.json")
  .then((rep1) => rep1.json())
  .then((rep2) => bds = rep2.all);

  bds.map((bd)=> {
    newProject(bd.name, bd.image,bd.source, bd.project);
  })
}
reclame_bd();
