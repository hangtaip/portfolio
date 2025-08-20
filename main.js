const btn = document.getElementById("themeToggle");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    if (document.documentElement.classList.contains("dark")) {
        localStorage.theme = "dark";
        if (btn)
            btn.textContent = "☀️";
    }
    else {
        localStorage.theme = "light";
        if (btn)
            btn.textContent = "🌙";
    }
});
export {};
//# sourceMappingURL=main.js.map