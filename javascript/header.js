const childsContainer = document.querySelector(".contenaire").childNodes;
const beurgeur = document.getElementById("beurgeur");
const header = document.querySelector("header");
const menu = document.querySelector(".menu");
const date = document.querySelector(".date");
const as = document.querySelectorAll(".menu a");

//funtions ....

function Change_menu_active() {
  as.forEach((a) => {
    a.addEventListener("click", (e) => {
      const active = a.parentElement.querySelector(".active");
  
      //on retire la class active de n'import quelle element
      active.classList.remove("active");
  
      // ajouter la class active de l'element a click
      if (!a.classList.contains("click")) {
        a.classList.add("active");
      }
    });
  });
}

function change_Page() {
  menu.childNodes.forEach((child) => {
    let handleActive = (childs, C, cur) => {
      childs.forEach((element) => {
        if (element.nodeType !== 3) {
          if (element.id == cur) {
            element.classList.remove(C);
          } else {
            if (!element.classList.contains(C)) {
              element.classList.add(C);
            }
          }
        }
      });
    };
    child.addEventListener("click", (e) => {
      let curentElement = child.textContent.toLowerCase();
      handleActive(childsContainer, "desactive", curentElement);
    });
  });
}

function showMenu() {
    beurgeur.classList.toggle("activeJS");
    menu.classList.toggle("showMenu");
};

function Bull_if_scroll(){
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
}

//event....

Change_menu_active();
change_Page();
Bull_if_scroll();
beurgeur.addEventListener("click", showMenu, true);