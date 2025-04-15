// TRABAJANDO CON EL TEMA
const themeToggle = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme") || "light";

document.documentElement.setAttribute("data-theme", currentTheme);

themeToggle.textContent = currentTheme === "dark" ? "🌞" : "🌙";

themeToggle.addEventListener("click", () => {
  const newTheme =
    document.documentElement.getAttribute("data-theme") === "dark"
      ? "light"
      : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  themeToggle.textContent = newTheme === "dark" ? "🌞" : "🌙";
});
