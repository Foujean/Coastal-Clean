/*
  Coastal Clean JavaScript
  ------------------------------------------------------------
  Keep small website interactions here.
*/

function scrollToSection(id) {
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const yearElement = document.getElementById("currentYear");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});