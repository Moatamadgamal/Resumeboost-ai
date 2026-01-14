export default function Hero({ t }) {
  const get = (key, fallback) => (t && t[key]) || fallback;

  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-left fade-up">
          <p className="pill">{get("hero_pill", "Practical AI for your career")}</p>

          <h1 className="hero-title">
            {get("hero_title_1", "Turn your CV into a")}{" "}
            <span className="grad">{get("hero_title_2", "job-ready")}</span>{" "}
            {get("hero_title_3", "profile.")}
          </h1>

          <p className="hero-sub">
            {get(
              "hero_sub",
              "Generate a tailored summary, highlight the right skills, and get a clean structure — in minutes."
            )}
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#try">
              {get("btn_build_now", "Build my CV now")}
            </a>
            <a className="btn btn-ghost" href="#features">
              {get("btn_how", "How it works")}
            </a>
          </div>

          <div className="hero-stats">
            <a className="stat" href="#try" style={{ display: "block" }}>
              <div className="stat-num">3</div>
              <div className="stat-text">{get("hero_stat_1", "quick inputs")}</div>
            </a>
            <a className="stat" href="#features" style={{ display: "block" }}>
              <div className="stat-num">1</div>
              <div className="stat-text">{get("hero_stat_2", "clear flow")}</div>
            </a>
            <a className="stat" href="#cta" style={{ display: "block" }}>
              <div className="stat-num">∞</div>
              <div className="stat-text">{get("hero_stat_3", "iterations")}</div>
            </a>
          </div>
        </div>

        <div className="hero-right float">
          <div className="pdf-card">
            <div className="pdf-top">
              <div className="pdf-title">{get("pdf_file", "ResumeBoost_AI_CV.pdf")}</div>
              <div className="pdf-badge">{get("pdf_badge", "PDF Preview")}</div>
            </div>

            <div className="pdf-page">
              <div className="pdf-header">
                <div>
                  <div className="pdf-name">{get("pdf_name", "Mohamed Ali")}</div>
                  <div className="pdf-role">
                    {get("pdf_role", "Data Analyst • Cairo, Egypt")}
                  </div>
                </div>
                <div className="pdf-meta">
                  <span>{get("pdf_meta_1", "ATS")}</span>
                  <span>{get("pdf_meta_2", "1 page")}</span>
                </div>
              </div>

              <div className="pdf-section">
                <div className="pdf-sec-title">{get("pdf_sec_summary", "Summary")}</div>
                <div className="pdf-text">
                  {get(
                    "pdf_summary_text",
                    "Results-driven professional focused on measurable impact and a recruiter-friendly structure."
                  )}
                </div>
              </div>

              <div className="pdf-section">
                <div className="pdf-sec-title">{get("pdf_sec_skills", "Skills")}</div>
                <div className="pdf-skills">
                  <span>{get("pdf_skill_1", "Power BI")}</span>
                  <span>{get("pdf_skill_2", "Excel")}</span>
                  <span>{get("pdf_skill_3", "SQL")}</span>
                  <span>{get("pdf_skill_4", "Communication")}</span>
                </div>
              </div>

              <div className="pdf-section">
                <div className="pdf-sec-title">{get("pdf_sec_exp", "Experience")}</div>
                <ul className="pdf-bullets">
                  <li>{get("pdf_exp_1", "Handled 50+ daily inquiries with 90%+ satisfaction.")}</li>
                  <li>{get("pdf_exp_2", "Improved reporting workflow to reduce response time.")}</li>
                  <li>{get("pdf_exp_3", "Maintained high accuracy in operations and tracking.")}</li>
                </ul>
              </div>
            </div>

            <button
              className="pdf-btn"
              type="button"
              onClick={() =>
                document.querySelector("#try")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {get("pdf_btn", "Generate preview")}
            </button>
          </div>

          <div className="glow" />
        </div>
      </div>
    </section>
  );
}
