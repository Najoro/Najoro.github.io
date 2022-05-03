/*
une projet est constituer par :
     *son nom
     *son techno
     *son lien vers le code source
     *son image de font d'image
     
FONCTIONALITER
-si on creer une nouvelle project on creera une balise span
-Si on clique l'image on part vers le project indiquer
-si on passe on hover son identiter(nom,tecno,code-source) est reveler
 */

const project = document.getElementById('project');

let newSpan = function(){
     let span = document.createElement('span');
     project.appendChild(span);
}
let projectContenue = function(nom,tecno,source, background) {
     var span = document.createElement('span');
     span.classList.add('newProject');
     project.appendChild(span);
     let newProject = {
          nom    : nom,
          tecno  : tecno,
          source : source,
     }
     return span.innerHTML = `<h3>${newProject.nom}</h3>
                              <h3>${tecno}</h3>
                              <a href= "${source}">code source</a>
                              `
}

let listProjects = [
     projectContenue("Calculatrice", "Javascript", "calc.com"),
     projectContenue("Calculatrice", "Javascript", "calc.io"),
     projectContenue("cc", "ss", "ca"),
     projectContenue("cc", "ss", "ca"),
     projectContenue("cc", "ss", "ca"),
     projectContenue("cc", "ss", "ca"),
     projectContenue("cc", "ss", "ca"),
]
