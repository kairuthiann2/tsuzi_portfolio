document.addEventListener("DOMContentLoaded", () => {
  // SMOOTH SCROLLONG FUNCTION
  const links = document.querySelectorAll("a[href^='#']");

  links.forEach((link) => {
    link.addEventListener("click", smoothScroll);
  });
    function smoothScroll(e) {
        e.preventDefault();
        const href = e.target.getAttribute("href");

        const targetElement = document.querySelector(href)
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
            });
        }
    }
});
