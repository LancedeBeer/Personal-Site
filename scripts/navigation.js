function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({
    behavior: 'smooth'
  });
}

document.querySelectorAll("nav ul li a").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    scrollToSection(this.getAttribute("href").substring(1));
  });
});
