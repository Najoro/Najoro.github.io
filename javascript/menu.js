// //DECLARATIONS
const beurgeur = document.getElementById("beurgeur");
const menu = document.querySelector(".menu");
const header = document.querySelector("header");

(function () {
  let showMenu = function () {
    beurgeur.classList.toggle("activeJS");
    menu.classList.toggle("showMenu");
  };
  beurgeur.addEventListener("click", showMenu, true);
})();

(() => {
  const bull = document.querySelector(".bull");

  let scrollY = function () {
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
    return supportPageOffset
      ? window.pageYOffset
      : isCSS1Compat
      ? document.documentElement.scrollTop
      : document.body.scrollTop;
  };
  window.addEventListener("scroll", (e) => {
    if (scrollY() > 70) {
      bull.style.visibility = "visible";
    } else {
      bull.style.visibility = "hidden";
    }
  });
})();
