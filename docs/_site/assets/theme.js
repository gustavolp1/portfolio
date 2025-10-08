document.addEventListener("DOMContentLoaded", () => {
  const themeButton = document.getElementById("toggle-theme");
  const currentTheme = localStorage.getItem("theme") || "light";

  // Apply saved theme
  document.documentElement.setAttribute("data-theme", currentTheme);
  themeButton.textContent = currentTheme === "dark" ? "Light Mode" : "Dark Mode";

  // Toggle logic
  themeButton.addEventListener("click", () => {
    const newTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    themeButton.textContent = newTheme === "dark" ? "Light Mode" : "Dark Mode";
  });
});