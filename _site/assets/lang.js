document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("toggle-lang");

  // Load saved language or default to English
  let currentLang = localStorage.getItem("portfolioLang") || "en";

  // Apply current language to all elements
  function applyLanguage(lang) {
    document.querySelectorAll("[data-en]").forEach(el => {
      el.innerText = el.dataset[lang];
    });

    // The button shows the *next* language to switch to
    if (lang === "en") {
      button.textContent = "🇧🇷 Português"; // currently English → switch to Portuguese
    } else {
      button.textContent = "🇬🇧 English";   // currently Portuguese → switch to English
    }
  }

  // Toggle and save
  function switchLang() {
    currentLang = currentLang === "en" ? "pt" : "en";
    localStorage.setItem("portfolioLang", currentLang);
    applyLanguage(currentLang);
  }

  // Initialize
  applyLanguage(currentLang);
  button.addEventListener("click", switchLang);
});
