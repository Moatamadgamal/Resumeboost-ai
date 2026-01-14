export default function Navbar({
  lang,
  setLang,
  t,
  theme,
  setTheme,
  onOpenAuth,
  user,
  onLogout,
}) {
  const get = (key, fallback) => (t && t[key]) || fallback;

  function toggleLang() {
    setLang((p) => (p === "en" ? "ar" : "en"));
  }

  function toggleTheme() {
    setTheme((p) => (p === "dark" ? "light" : "dark"));
  }

  const firstName =
    user?.name?.trim?.() ? user.name.trim().split(" ")[0] : "";

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="brand">
          <span className="logo-dot" />
          <span>ResumeBoost AI</span>
        </a>

        <nav className="nav-links">
          <a href="#try">{get("nav_try", "Try it")}</a>
          <a href="#features">{get("nav_how", "How it works")}</a>

          {/* Build my CV يودّي لـ #try */}
          <a href="#try" className="btn btn-ghost">
            {get("nav_build", "Build my CV")}
          </a>

          {/* Auth area */}
          {firstName ? (
            <div className="nav-auth">
              <span className="nav-user">
                {get("nav_hi", "Hi")}, {firstName}
              </span>

              <button
                type="button"
                className="icon-btn"
                onClick={() => onLogout?.()}
              >
                {get("nav_logout", "Logout")}
              </button>
            </div>
          ) : (
            <div className="nav-auth">
              <button
                type="button"
                className="icon-btn"
                onClick={() => onOpenAuth?.("login")}
              >
                {get("nav_signin", "Sign in")}
              </button>

              <button
                type="button"
                className="icon-btn"
                onClick={() => onOpenAuth?.("signup")}
              >
                {get("nav_signup", "Create account")}
              </button>
            </div>
          )}

          {/* Language + Theme */}
          <button type="button" className="icon-btn" onClick={toggleLang}>
            {lang === "en" ? "AR" : "EN"}
          </button>

          <button type="button" className="icon-btn" onClick={toggleTheme}>
            {theme === "dark" ? "☀" : "🌙"}
          </button>
        </nav>
      </div>
    </header>
  );
}
