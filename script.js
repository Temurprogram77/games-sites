let close = document.querySelector(".close");
let burger_menu = document.querySelector(".burger_menu");
let menu = document.querySelector(".menu");

menu.addEventListener("click", () => {
  burger_menu.style.right = "0px";
});

close.addEventListener("click", () => {
  burger_menu.style.right = "-500px";
});
