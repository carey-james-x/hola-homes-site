const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".site-nav a");
const languageButtons = document.querySelectorAll("[data-lang-switch]");
const translatableElements = document.querySelectorAll("[data-en][data-es]");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
    navToggle?.setAttribute("aria-expanded", "false");
    navToggle?.setAttribute("aria-label", "Open navigation");
  });
});

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const setLanguage = (language) => {
  const activeLanguage = language === "es" ? "es" : "en";
  document.documentElement.setAttribute("lang", activeLanguage);

  translatableElements.forEach((element) => {
    element.textContent = element.dataset[activeLanguage];
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.langSwitch === activeLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem("holaHomesLanguage", activeLanguage);
};

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.langSwitch);
  });
});

setLanguage(localStorage.getItem("holaHomesLanguage") || "en");
