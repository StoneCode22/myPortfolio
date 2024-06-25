// document.addEventListener("DOMContentLoaded", function () {
//    // Hamburger menu functionality
//    const hamburger = document.querySelector(".hamburger");
//    const menu = document.querySelector(".menu");
 
//    // Toggle menu visibility on hamburger click
//    hamburger.addEventListener("click", () => {
//      menu.classList.toggle("active");
//    });
 
//    // Close menu when a menu link is clicked
//    menu.querySelectorAll("a").forEach((link) => {
//      link.addEventListener("click", () => {
//        menu.classList.remove("active");
//      });
//    });
// })
 
   // Scroll to top functionality
   const scrollToTopLink = document.querySelector(".scroll-to-top");
 
   // Smooth scroll to the top of the page when the link is clicked
   scrollToTopLink.addEventListener("click", (event) => {
     event.preventDefault();
     window.scrollTo({
       top: 0,
       behavior: "smooth",
     });
   });

   // const hamburgerMenu = document.querySelector('.hamburger-menu');
   // const links = document.querySelector('.links');
   
   // hamburgerMenu.addEventListener('click', () => {
   //   hamburgerMenu.classList.toggle('active');
   //   links.classList.toggle('active');
   // });
   
   