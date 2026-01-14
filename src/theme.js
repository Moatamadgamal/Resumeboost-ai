export function applyTheme(theme) {
  const root = document.documentElement;
  root.setAttribute("data-theme", theme); // light | dark
  localStorage.setItem("theme", theme);
}

export function getInitialTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "dark" || saved === "light") return saved;

  // لو المستخدم جهازه دارك افتراضيًا
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  return prefersDark ? "dark" : "light";
}
