document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");
  const saved = localStorage.getItem("portfolio-theme");
  if (saved) root.setAttribute("data-theme", saved);

  const updateIcon = () => {
    const light = root.getAttribute("data-theme") === "light";
    toggle.innerHTML = light ? '<i class="bi bi-sun"></i>' : '<i class="bi bi-moon-stars"></i>';
  };
  updateIcon();

  toggle.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    localStorage.setItem("portfolio-theme", next);
    updateIcon();
  });

  document.getElementById("year").textContent = new Date().getFullYear();

  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      const menu = document.getElementById("mainNav");
      if (menu.classList.contains("show")) bootstrap.Collapse.getOrCreateInstance(menu).hide();
    });
  });
});
