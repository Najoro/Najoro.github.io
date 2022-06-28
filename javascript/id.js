const languages = document.querySelector(".languages");
const diplomes = document.querySelector(".diplomes");
const autre = document.querySelector(".autre");
const interets = document.querySelector(".interets");
const indetiter = [];

const fetchUp = async function () {
  await fetch("bd.json")
    .then((res) => res.json())
    .then((res) => res.identiter)
    .then((res)=> indetiter.push(res));

  console.log(indetiter[0].language);
};
fetchUp();