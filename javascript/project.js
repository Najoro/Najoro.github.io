const project = document.getElementById('project');
let newProject = document.createElement('span');
project.appendChild(newProject)
newProject.classList.add('newProject');


let newObject = function(name,tecno,bg,source){
     return `<h4> ${name}</h4>          
             <h4> ${tecno}</h4>          
             <a href = '${source}' >${source}<a>
          `
}
let objectProject = [
     newObject("calculatrice", "HTML, CSS , JAVASCRIPT", "../media/bg-generateur.png center/cover" , "github.io"),
     newObject("calculatrice", "HTML, CSS , JAVASCRIPT", "../media/bg-generateur.png center/cover" , "github.io"),
     newObject("calculatrice", "HTML, CSS , JAVASCRIPT", "../media/bg-generateur.png center/cover" , "github.io"),
] 

for (let i = 0; i < objectProject.length; i++) {
     newProject.innerHTML += objectProject[i];
}

console.log(objectProject.length);