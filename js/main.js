let toggleDarkModeBtn = document.querySelector("#toggleDarkModeBtn");
let body = document.querySelector("body");
let header = document.querySelector("header");
let secMain = document.querySelector("#main");
let secOverview = document.querySelector("#overview");

function toggleDarkMode() {
  if (toggleDarkModeBtn.classList.contains("darkModeActive")) {
    toggleDarkModeBtn.classList.remove("darkModeActive");
    body.classList.remove("darkThemeBody");
    header.classList.remove("darkThemeHeader");
    secMain.classList.remove("darkThemeSecMain");
    secOverview.classList.remove("darkThemeSecOverview");
  } else {
    toggleDarkModeBtn.classList.add("darkModeActive");
    body.classList.add("darkThemeBody");
    header.classList.add("darkThemeHeader");
    secMain.classList.add("darkThemeSecMain");
    secOverview.classList.add("darkThemeSecOverview");
  }
}

function init() {
  toggleDarkModeBtn.addEventListener("click", toggleDarkMode);
}

window.onload = init();
