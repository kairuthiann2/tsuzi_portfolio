document.addEventListener("DOMContentLoaded", () => {
  // Select navigation toggle elements
  const navToggle = document.getElementById("nav_toggle");
  const navClose = document.getElementById("nav_close");
  const navMenu = document.querySelector("header nav ul");

  // function to open the navigation menu
  function openMenu() {
    navMenu.classList.add("show-menu"); // Add the 'show-menu' class to display the menu
    navToggle.style.display = "none"; // Hide the hamburger icon
    navClose.style.display = "inline-block"; // Show the close icon
  }
  // Function to close the navigation menu
  function closeMenu() {
    navMenu.classList.remove("show-menu"); // Remove 'show-menu' to hide the menu
    navToggle.style.display = "inline-block"; // Show the hamburger icon again
    navClose.style.display = "none"; // Hide the close icon
  }

  // Attach event listeners to the icons for toggling
  navToggle.addEventListener("click", openMenu); // Click on the hamburger icon opens the menu
  navClose.addEventListener("click", closeMenu); // Click on the close icon opens the menu
});
