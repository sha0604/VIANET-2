const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

  reveals.forEach((element) => {

    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {

      element.classList.add("active");

    }

  });

});
document.addEventListener("DOMContentLoaded", () => {

  const menuBtn = document.querySelector(".menu-btn");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener("click", () => {

    menuBtn.classList.toggle("active");
    mobileMenu.classList.toggle("active");

  });

});