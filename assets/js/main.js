const HEADER = document.querySelector("header");
const HEADER_LOGO = document.querySelector("header .logo");
const MENU = document.querySelector("header .menu");
const MENU_ICON = document.querySelector("header .menu i");

// Menu List Toggle
MENU.addEventListener("click", () => {
  MENU_ICON.classList.toggle("fa-bars");
  MENU_ICON.classList.toggle("fa-xmark");
  MENU.toggleAttribute("show");
});
// End Menu List

// Global Cover Checker
const coverChecker = document.querySelector(".CoverChecker");

const checkInView = new IntersectionObserver(
  (event) => {
    const coverage = event[0].intersectionRatio;
    if (coverage <= 0) enableLightHeader();
    else disableLightHeader();
  },
  {
    root: null,
    threshold: [0, 0.5],
  }
);

if (coverChecker) checkInView.observe(coverChecker);

function enableLightHeader() {
  HEADER.classList.add("bg-light");
  HEADER_LOGO.src = "./assets/images/bakery-color.png";
}

function disableLightHeader() {
  HEADER.classList.remove("bg-light");

  if (window.innerWidth <= 991)
    HEADER_LOGO.src = "./assets/images/bakery-color.png";
  else HEADER_LOGO.src = "./assets/images/bakery-light-1.png";
}
// End Cover Checker
