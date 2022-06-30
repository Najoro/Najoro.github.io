const languagesBase = document.querySelector(".languages-base-contenaire");
const languagesFramwork = document.querySelector(
  ".languages-framwork-contenaire"
);
const autre1 = document.querySelector(".autres-contenaire1");
const autre2 = document.querySelector(".autres-contenaire2");
const diplomes = document.querySelector(".diplomes-contenaire");
const interets = document.querySelector(".interets-contenaire");
let data = [];

async function fetchUp() {
  await fetch("bd.json")
    .then((res1) => res1.json())
    .then((res2) => (data = res2.identiter));

  console.log(data);
}
const DisplayInteret = async function (tag, ref) {
  const Interets = ref;
  Interets.map((Interet) => {
    tag.innerHTML += `
    <li>${Interet.nom}</li>
    `;
  });
};
const DisplayLanguages = async function (tag, ref) {
  const languages = ref;
  languages.map((language) => {
    tag.innerHTML += `
    <div class="eatchLanguage">
      <h4>${language.nom}</h4>
      <div class="progresseBarre">
        <div class="eatch-Bare" style = "width:${language.pourcentage}%;"></div>
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
async function fetchCall() {
  await fetchUp();
  DisplayLanguages(languagesBase, data.languages);
  DisplayLanguages(languagesFramwork, data.framworks);
  DisplayLanguages(autre1, data.autre[0]);
  DisplayLanguages(autre2, data.autre[1]);
  DisplayInteret(interets.firstElementChild, data.interet);
  DisplayDiplome(diplomes, data.Diplome);
}
fetchCall();
