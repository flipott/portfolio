const hamburgerIcon = document.getElementById("hamburger-icon");
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuLinks = document.getElementById("mobile-menu").children;

hamburgerIcon.addEventListener("click", () => {
    if (hamburgerIcon.classList.contains("show-mobile-menu")) {
        hamburgerIcon.classList.remove("show-mobile-menu");
        mobileMenu.classList.remove("show-mobile-menu");
    } else {
        hamburgerIcon.classList.add("show-mobile-menu");
        mobileMenu.classList.add("show-mobile-menu");
    }
});

for (let i = 0; i < mobileMenuLinks.length; i++) {
    mobileMenuLinks[i].addEventListener("click", () => {
        hamburgerIcon.classList.remove("show-mobile-menu");
        mobileMenu.classList.remove("show-mobile-menu");
    });
}

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }