const HEADER = document.querySelector("header");
const HEADER_LOGO = document.querySelector("header .logo");
const MENU = document.querySelector("header .menu");
const MENU_ICON = document.querySelector("header .menu i");

MENU.addEventListener("click", () => {
  MENU_ICON.classList.toggle("fa-bars");
  MENU_ICON.classList.toggle("fa-xmark");
  MENU.toggleAttribute("show");
});

const coverChecker = document.querySelector(".CoverChecker");

const checkInView = new IntersectionObserver(
  (event) => {
    const coverage = event[0].intersectionRatio;
    if (coverage <= 0) {
      HEADER.classList.add("bg-light");
      HEADER_LOGO.src = "../assets/images/bakery-color.png";
    } else {
      HEADER.classList.remove("bg-light");
      HEADER_LOGO.src = "../assets/images/bakery-light-1.png";
    }
  },
  {
    root: null,
    threshold: [0, 0.5],
  }
);

checkInView.observe(coverChecker);
