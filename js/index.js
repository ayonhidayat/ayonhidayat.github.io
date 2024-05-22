const eksplorButton = document.querySelector(".eksplor-button");
const landingPage = document.querySelector(".landing-page");
const menu = document.querySelector("#menu");
const navbarNav = document.querySelector(".navbar-nav");
const searchIcon = document.querySelector("#search-icon");
const searchBar = document.querySelector(".search-bar");

function removePage() {
  landingPage.classList.add("hidden");
  document.querySelector(".container-main").classList.remove("hidden");
}

document.querySelector("#menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

document.querySelector("#search-icon").onclick = (e) => {
  searchBar.classList.toggle("active");
  searchBar.focus();
  e.preventDefault();
};

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!searchIcon.contains(e.target) && !searchBar.contains(e.target)) {
    searchBar.classList.remove("active");
  }
});
