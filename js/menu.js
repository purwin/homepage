let menu = document.querySelector("#id_menu");
let main = document.querySelector("main");
let nav = document.querySelector(".nav");

// Open nav drop-down on smaller screens
menu.addEventListener('click', function(e) {
  nav.classList.toggle('open');
}, false);

// Close Nav drop-down
main.addEventListener('click', function(e) {
  nav.classList.remove('open');
}, false);
