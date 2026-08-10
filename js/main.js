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
  const menuClose = document.querySelector(".menu-close");

  if (!menuBtn || !mobileMenu || !menuClose) return;

  menuBtn.addEventListener("click", () => {

    menuBtn.classList.add("active");
    mobileMenu.classList.add("active");

  });

  menuClose.addEventListener("click", () => {

    menuBtn.classList.remove("active");
    mobileMenu.classList.remove("active");

  });

});
