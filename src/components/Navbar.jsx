export default function Navbar({ lang, setLang, t, theme, setTheme, onOpenAuth, user }) {
  const get = (key, fallback) => (t && t[key]) || fallback;

  function toggleLang() {
    setLang((p) => (p === "en" ? "ar" : "en"));
  }
  function toggleTheme() {
    setTheme((p) => (p === "dark" ? "light" : "dark"));
  }

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

          {/* Build my CV يودّي لـ #try زي ما طلبت */}
          <a href="#try" className="btn btn-ghost">
            {get("nav_build", "Build my CV")}
          </a>

          {/* Auth buttons */}
          {user?.name ? (
            <span className="nav-user">Hi, {user.name.split(" ")[0]}</span>
          ) : (
            <>
              <button type="button" className="icon-btn" onClick={() => onOpenAuth?.("login")}>
                Sign in
              </button>
              <button type="button" className="icon-btn" onClick={() => onOpenAuth?.("signup")}>
                Create account
              </button>
            </>
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
