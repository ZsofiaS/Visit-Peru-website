let logo = document.getElementById("logo");
let navbar = document.getElementById("navbar");
let header = document.getElementById("header");

logo.addEventListener("click", () => {
  navbar.classList.toggle("home__navbar--active");
})
