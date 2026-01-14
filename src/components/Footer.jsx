export default function Footer({ t }) {
  const get = (key, fallback) => (t && t[key]) || fallback;
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-top">
        {/* Left */}
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="footer-dot" />
            <div>
              <p className="footer-name">
                {get("footer_name", "ResumeBoost AI")}
              </p>
              <p className="footer-tag">
                {get(
                  "footer_tag",
                  "Build an ATS-friendly CV in minutes."
                )}
              </p>
            </div>
          </div>

          <p className="footer-desc">
            {get(
              "footer_desc",
              "Practical AI to help users generate a clean structure, stronger bullets, and the right keywords — without confusion."
            )}
          </p>

          <div className="footer-badges">
            <span className="badge">{get("footer_badge_1", "ATS-ready")}</span>
            <span className="badge">{get("footer_badge_2", "Fast")}</span>
            <span className="badge">{get("footer_badge_3", "Editable")}</span>
          </div>
        </div>

        {/* Right */}
        <div className="footer-cols">
          <div className="footer-col">
            <p className="footer-col-title">
              {get("footer_col_product", "Product")}
            </p>
            <a href="#try">{get("footer_link_try", "Try it")}</a>
            <a href="#features">{get("footer_link_how", "How it works")}</a>
            <a href="#cta">{get("footer_link_start", "Get started")}</a>
          </div>

          <div className="footer-col">
            <p className="footer-col-title">
              {get("footer_col_company", "Company")}
            </p>
            <a href="#top">{get("footer_link_about", "About")}</a>
            <a href="#features">{get("footer_link_why", "Why it works")}</a>
            <a href="#try">{get("footer_link_use", "Use cases")}</a>
          </div>

          <div className="footer-col">
            <p className="footer-col-title">
              {get("footer_col_get", "Get started")}
            </p>
            <a className="footer-cta" href="#try">
              {get("footer_cta", "Build my CV now →")}
            </a>
            <p className="footer-mini">
              {get(
                "footer_mini",
                "No signup required • Save time • Clear next step"
              )}
            </p>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <small>
          © {year} {get("footer_rights", "ResumeBoost AI. All rights reserved.")}
        </small>
        <small className="muted">
          {get("footer_made", "Made with React + Vite")}
        </small>
      </div>
    </footer>
  );
}
