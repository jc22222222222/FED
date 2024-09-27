let deButton = document.querySelector("nav button:nth-of-type(2)");
let deNav = document.querySelector("nav");


deButton.onclick = toggleMenu;

function toggleMenu(){
  deNav.classList.toggle("toonMenu");
}

