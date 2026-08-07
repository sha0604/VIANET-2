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
document.addEventListener("DOMContentLoaded",()=>{

  const menuBtn = document.querySelector(".menu-btn");
  const mobileMenu = document.querySelector(".mobile-menu");


  menuBtn.addEventListener("click",()=>{

    mobileMenu.classList.toggle("active");
    menuBtn.classList.toggle("active");

  });

});