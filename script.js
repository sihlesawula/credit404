const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links"); 
const dropdown = document.querySelector(".dropdown"); 
hamburger.addEventListener("click", () => {
   navLinks.classList.toggle("active"); 
  });
dropdown.addEventListener("click", () => { 
  if (window.innerWidth <= 900) { 
    dropdown.classList.toggle("active");
   } 
  });