const projects = document.getElementById("projects");
let allProjects = [];

let newProject = function (projectName,image,source,project,language) {

  let objectJSON = JSON.stringify(language)
  console.log(objectJSON);
  //create new element
  let span = document.createElement("span");
  span.classList.add("composante");
  projects.appendChild(span);

  //add class for the new element
  span.style.background = `${image} no-repeat center/cover`;

  //add element for the new element
  span.innerHTML = `
    <div class="language-contenaire">${objectJSON}</div>
    <p> ${projectName}</p>
    <div class="btm-contenaire">
      <a href="${source}" id="external" class="btm-contenue"><i class="fa-solid fa-code"></i></a>
      <a href="${project}" id="external" class="btm-contenue"><i class="fa-solid fa-eye"></i></a>
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
  .then((rep2) => allProjects = rep2.project);

  allProjects.map((Projects)=> {
    newProject(Projects.name, Projects.image,Projects.source, Projects.project,Projects.language);
  })
}
reclame_bd();
