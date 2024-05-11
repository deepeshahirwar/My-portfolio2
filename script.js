function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
 

// for back to top btn 


document.addEventListener("DOMContentLoaded", function() {
  const toTop = document.querySelector(".to-top");

  window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
          toTop.classList.add("active");
      } else {
          toTop.classList.remove("active");
      }
  });

  // Scroll to top when the button is clicked
  toTop.addEventListener("click", () => {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
  });
});

