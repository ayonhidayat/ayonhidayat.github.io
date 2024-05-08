const eksplorButton = document.querySelector(".eksplor-button");
const landingPage = document.querySelector(".landing-page");
const menu = document.querySelector("#menu");
const navbarNav = document.querySelector(".navbar-nav");

function removePage() {
  landingPage.classList.add("hidden");
}

function activeNavbar() {
  navbarNav.classList.toggle("active");
}
