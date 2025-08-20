const btn = document.getElementById("themeToggle") as HTMLButtonElement | null;

btn?.addEventListener("click", () => {
   document.documentElement.classList.toggle("dark");

   if (document.documentElement.classList.contains("dark")) {
      localStorage.theme = "dark";
      if (btn) btn.textContent = "☀️";
   } else {
      localStorage.theme = "light";
      if (btn) btn.textContent = "🌙";
   }
});
