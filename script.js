const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".site-nav a");
const languageButtons = document.querySelectorAll("[data-lang-switch]");

// Each page is a real, static page in its own language (English at the root, Spanish under /es/).
const pageLanguage = document.documentElement.lang === "es" ? "es" : "en";
const navLabels = {
  en: { open: "Open navigation", close: "Close navigation" },
  es: { open: "Abrir navegación", close: "Cerrar navegación" },
}[pageLanguage];

if (navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? navLabels.close : navLabels.open);
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
    navToggle?.setAttribute("aria-expanded", "false");
    navToggle?.setAttribute("aria-label", navLabels.open);
  });
});

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

// Language buttons link to the other language version of the same page.
languageButtons.forEach((button) => {
  const isActive = button.dataset.langSwitch === pageLanguage;
  button.classList.toggle("is-active", isActive);
  button.setAttribute("aria-pressed", String(isActive));

  button.addEventListener("click", () => {
    if (button.dataset.href) {
      window.location.href = button.dataset.href + window.location.hash;
    }
  });
});
