var ventana = document.querySelectorAll(".header ul li ");
var categoria = document.querySelectorAll(".Categoria");
var show = categoria[0];

window.onload = function() {
  console.log(show);
  ventana[0].addEventListener("click", () => {
    show.classList.add("hidden");
    show = categoria[0];
    show.classList.remove("hidden");
    console.log(show);
  });
  ventana[1].addEventListener("click", () => {
    show.classList.add("hidden");
    show = categoria[1];
    show.classList.remove("hidden");
    console.log(show);
  });
  ventana[2].addEventListener("click", () => {
    show.classList.add("hidden");
    show = categoria[2];
    show.classList.remove("hidden");
    console.log(show);
  });
  ventana[3].addEventListener("click", () => {
    show.classList.add("hidden");
    show = categoria[3];
    show.classList.remove("hidden");
    console.log(show);
  });
  ventana[4].addEventListener("click", () => {
    show.classList.add("hidden");
    show = categoria[4];
    show.classList.remove("hidden");
    console.log(show);
  });

};