const languagesBase = document.getElementById("languages");
const autres = document.getElementById("autres");
const diplomes = document.getElementById("diplomes");
const interets = document.getElementById("interets");
let data = [];

// recuperation du donne .....

async function fetchUp() {
  await fetch("bd.json")
    .then((res1) => res1.json())
    .then((res2) => (data = res2.identiter));

  // console.log(data);
}

//function .......

function Teste(Atester, vrais, faux) {
  return Atester != " " ? vrais : faux;
}

const DisplayLanguages = async function (tag, ref) {
  const languages = ref;
  await languages.map((language) => {
    tag.innerHTML += `
    <div class="eatchLanguage">
      <h4>
       ${Teste(
         language.icone,
         `<i class="${language.icone}" style ="color :${language.color};"></i>`,
         `<img src = "${language.flag}" alt = ""/>`
       )}
        </h4>
        <h1>${language.nom} </h1>
        ${Teste(
          language.pourcentage,
          `<div class="progresseBarre">
              <div class="eatch-Bare" style = "width:${language.pourcentage}%;">
            </div>
          `,
          " "
        )}
      </div>
    </div>
    `;
  });
};
const DisplayDiplome = async function (tag, ref) {
  const languages = ref;
  languages.map((language) => {
    tag.innerHTML += `
      <ul class="DiplomeEatch">
        <li>${language.nom}</li>
        <li>${language.obtention}</li>
        <li>${language.ecole}</li>
      </ul>
    `;
  });
};
//affichage...
async function fetchCall() {
  await fetchUp();
  DisplayLanguages(languagesBase, data.languages);
  DisplayLanguages(autres.firstElementChild, data.autre[0]);
  DisplayLanguages(autres.lastElementChild, data.autre[1]);
  DisplayLanguages(interets.firstElementChild, data.interet);
  DisplayDiplome(diplomes, data.Diplome);
}
fetchCall();