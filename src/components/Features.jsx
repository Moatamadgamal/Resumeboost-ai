import Reveal from "./Reveal";

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

  const cards = [
    {
      iconKey: "features_1_icon",
      iconFallback: "⚡",
      titleKey: "features_1_title",
      titleFallback: "Smart summary",
      textKey: "features_1_text",
      textFallback:
        "Get a tailored summary based on goal, level, and tone — readable for recruiters.",
    },
    {
      iconKey: "features_2_icon",
      iconFallback: "🎯",
      titleKey: "features_2_title",
      titleFallback: "ATS keywords",
      textKey: "features_2_text",
      textFallback:
        "Highlight the right skills and keywords so your CV passes initial screening.",
    },
    {
      iconKey: "features_3_icon",
      iconFallback: "🧩",
      titleKey: "features_3_title",
      titleFallback: "Clean structure",
      textKey: "features_3_text",
      textFallback:
        "A clean layout that makes your experience look clear and professional.",
    },
    {
      iconKey: "features_4_icon",
      iconFallback: "📝",
      titleKey: "features_4_title",
      titleFallback: "Bullet rewrites",
      textKey: "features_4_text",
      textFallback:
        'Turn “I did tasks” into achievement bullets with impact and metrics.',
    },
    {
      iconKey: "features_5_icon",
      iconFallback: "🔁",
      titleKey: "features_5_title",
      titleFallback: "Iterate fast",
      textKey: "features_5_text",
      textFallback:
        "Try multiple tones and versions until you get the best result.",
    },
    {
      iconKey: "features_6_icon",
      iconFallback: "✅",
      titleKey: "features_6_title",
      titleFallback: "Clear next step",
      textKey: "features_6_text",
      textFallback:
        "The page always guides the user to one action: build the CV now.",
    },
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        {/* Head */}
        <Reveal className="features-head" delay={0.05}>
          <h2 className="sec-title">{get("features_title", "How it works")}</h2>
          <p className="sec-sub">
            {get(
              "features_sub",
              'A simple flow that helps users finish faster — and feel confident to click “Build my CV”.'
            )}
          </p>
        </Reveal>

        {/* Cards */}
        <div className="features-grid">
          {cards.map((c, idx) => (
            <Reveal key={idx} className="f-card" delay={0.08 + idx * 0.07}>
              <div className="f-icon">{get(c.iconKey, c.iconFallback)}</div>
              <h3 className="f-title">{get(c.titleKey, c.titleFallback)}</h3>
              <p className="f-text">{get(c.textKey, c.textFallback)}</p>
            </Reveal>
          ))}
        </div>

        {/* Bottom buttons */}
        <Reveal className="features-bottom" delay={0.08}>
          <a className="btn btn-primary" href="#cta" onClick={goCTA}>
            {get("features_btn_primary", "Build my CV")}
          </a>

          <a className="btn btn-ghost" href="#try" onClick={goTry}>
            {get("features_btn_secondary", "Update inputs")}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
