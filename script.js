
// Display the current year in the footer
document.getElementById("year").textContent =
    new Date().getFullYear();

// Highlight the navigation link for the section being viewed
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

function updateNavigation() {
    let currentSection = "home";

    sections.forEach(function(section) {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.id;
        }
    });

    navLinks.forEach(function(link) {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", updateNavigation);
window.addEventListener("load", updateNavigation);

// Show a message when the page is ready
console.log("Welcome to Agalya's Portfolio!");
