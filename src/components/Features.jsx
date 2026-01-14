export default function Features({ t }) {
  const get = (key, fallback) => (t && t[key]) || fallback;

  function goCTA(e) {
    e.preventDefault();
    document.querySelector("#cta")?.scrollIntoView({ behavior: "smooth" });
  }

  function goTry(e) {
    e.preventDefault();
    document.querySelector("#try")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="features-head fade-up">
          <h2 className="sec-title">{get("features_title", "How it works")}</h2>
          <p className="sec-sub">
            {get(
              "features_sub",
              'A simple flow that helps users finish faster — and feel confident to click “Build my CV”.'
            )}
          </p>
        </div>

        <div className="features-grid">
          <div className="f-card fade-up">
            <div className="f-icon">{get("features_1_icon", "⚡")}</div>
            <h3 className="f-title">{get("features_1_title", "Smart summary")}</h3>
            <p className="f-text">
              {get(
                "features_1_text",
                "Get a tailored summary based on goal, level, and tone — readable for recruiters."
              )}
            </p>
          </div>

          <div className="f-card fade-up" style={{ animationDelay: "0.08s" }}>
            <div className="f-icon">{get("features_2_icon", "🎯")}</div>
            <h3 className="f-title">{get("features_2_title", "ATS keywords")}</h3>
            <p className="f-text">
              {get(
                "features_2_text",
                "Highlight the right skills and keywords so your CV passes initial screening."
              )}
            </p>
          </div>

          <div className="f-card fade-up" style={{ animationDelay: "0.16s" }}>
            <div className="f-icon">{get("features_3_icon", "🧩")}</div>
            <h3 className="f-title">{get("features_3_title", "Clean structure")}</h3>
            <p className="f-text">
              {get(
                "features_3_text",
                "A clean layout that makes your experience look clear and professional."
              )}
            </p>
          </div>

          <div className="f-card fade-up" style={{ animationDelay: "0.24s" }}>
            <div className="f-icon">{get("features_4_icon", "📝")}</div>
            <h3 className="f-title">{get("features_4_title", "Bullet rewrites")}</h3>
            <p className="f-text">
              {get(
                "features_4_text",
                'Turn “I did tasks” into achievement bullets with impact and metrics.'
              )}
            </p>
          </div>

          <div className="f-card fade-up" style={{ animationDelay: "0.32s" }}>
            <div className="f-icon">{get("features_5_icon", "🔁")}</div>
            <h3 className="f-title">{get("features_5_title", "Iterate fast")}</h3>
            <p className="f-text">
              {get(
                "features_5_text",
                "Try multiple tones and versions until you get the best result."
              )}
            </p>
          </div>

          <div className="f-card fade-up" style={{ animationDelay: "0.40s" }}>
            <div className="f-icon">{get("features_6_icon", "✅")}</div>
            <h3 className="f-title">{get("features_6_title", "Clear next step")}</h3>
            <p className="f-text">
              {get(
                "features_6_text",
                "The page always guides the user to one action: build the CV now."
              )}
            </p>
          </div>
        </div>

        <div className="features-bottom">
          <a className="btn btn-primary" href="#cta" onClick={goCTA}>
            {get("features_btn_primary", "Build my CV")}
          </a>

          <a className="btn btn-ghost" href="#try" onClick={goTry}>
            {get("features_btn_secondary", "Update inputs")}
          </a>
        </div>
      </div>
    </section>
  );
}
