const languagesBase = document.querySelector(".languages-base-contenaire");
const languagesFramwork = document.querySelector(
  ".languages-framwork-contenaire"
);
const autre = document.querySelector(".autres-contenaire");
const diplomes = document.querySelector(".diplomes-contenaire");
const interets = document.querySelector(".interets-contenaire");
let data = [];

async function fetchUp() {
  await fetch("bd.json")
    .then((res1) => res1.json())
    .then((res2)=> data = res2.identiter)

  console.log(data);
};

const fetchDisplay = async function (tag, ref) {
  const languages = ref;
  languages.map((language) => {
    tag.innerHTML += `
    <div class="eatchLanguage">
      <h4>${language.nom}</h4>
      <div class="progresseBarre">
        <div class="eatch-Bare" style = "width:${language.pourcentage}%;"></div>
      </div>
    </div>
    `
  });
};
async function fetchCall(){
  await fetchUp();
  fetchDisplay(languagesBase, data.languages);
  fetchDisplay(languagesFramwork, data.framworks);
  fetchDisplay(autre, data.autre);
}
fetchCall();