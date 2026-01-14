import { useMemo, useState } from "react";

export default function TryIt({ t }) {
  // نفس فكرة Hero: لو t أو key ناقص يرجّع fallback
  const get = (key, fallback) => (t && t[key]) || fallback;

  const [goal, setGoal] = useState("job");
  const [level, setLevel] = useState("junior");
  const [tone, setTone] = useState("formal");

  const preview = useMemo(() => {
    const goalText =
      goal === "job"
        ? get("try_goal_job_text", "landing a job")
        : goal === "intern"
        ? get("try_goal_intern_text", "getting an internship")
        : get("try_goal_freelance_text", "winning freelance clients");

    const levelText =
      level === "junior"
        ? get("try_level_junior", "Junior")
        : level === "mid"
        ? get("try_level_mid", "Mid-level")
        : get("try_level_senior", "Senior");

    const toneText =
      tone === "formal"
        ? get("try_tone_formal", "Formal")
        : tone === "friendly"
        ? get("try_tone_friendly", "Friendly")
        : get("try_tone_bold", "Bold");

    return {
      title: `${levelText} ${get("try_preview_title_suffix", "CV Summary")} (${toneText})`,
      body:
        `${get("try_preview_body_prefix", "Focused on")} ${goalText}. ` +
        `${get(
          "try_preview_body_rest",
          "Clear, ATS-friendly structure with measurable results. Tailored keywords and concise bullets for recruiters."
        )}`,
      bullets: [
        get("try_b1", "Impact-first bullets with numbers."),
        get("try_b2", "Skills matched to the selected goal."),
        get("try_b3", "Clean layout optimized for ATS."),
      ],
    };
  }, [goal, level, tone, t]);

  function goCTA() {
    document.querySelector("#cta")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section id="try" className="try">
      <div className="container try-grid">
        {/* Left: controls */}
        <div className="try-left fade-up">
          <h2 className="sec-title">{get("try_title", "Try it (interactive)")}</h2>
          <p className="sec-sub">
            {get(
              "try_sub",
              "Choose your goal, level, and tone — the preview updates instantly."
            )}
          </p>

          <div className="panel">
            <div className="group">
              <label className="label">{get("try_goal", "Goal")}</label>
              <div className="seg">
                <button
                  type="button"
                  className={`seg-btn ${goal === "job" ? "active" : ""}`}
                  onClick={() => setGoal("job")}
                >
                  {get("try_goal_job", "Job")}
                </button>

                <button
                  type="button"
                  className={`seg-btn ${goal === "intern" ? "active" : ""}`}
                  onClick={() => setGoal("intern")}
                >
                  {get("try_goal_intern", "Internship")}
                </button>

                <button
                  type="button"
                  className={`seg-btn ${goal === "freelance" ? "active" : ""}`}
                  onClick={() => setGoal("freelance")}
                >
                  {get("try_goal_freelance", "Freelance")}
                </button>
              </div>
            </div>

            <div className="group">
              <label className="label">{get("try_level", "Level")}</label>
              <div className="seg">
                <button
                  type="button"
                  className={`seg-btn ${level === "junior" ? "active" : ""}`}
                  onClick={() => setLevel("junior")}
                >
                  {get("try_level_junior", "Junior")}
                </button>

                <button
                  type="button"
                  className={`seg-btn ${level === "mid" ? "active" : ""}`}
                  onClick={() => setLevel("mid")}
                >
                  {get("try_level_mid", "Mid")}
                </button>

                <button
                  type="button"
                  className={`seg-btn ${level === "senior" ? "active" : ""}`}
                  onClick={() => setLevel("senior")}
                >
                  {get("try_level_senior", "Senior")}
                </button>
              </div>
            </div>

            <div className="group">
              <label className="label">{get("try_tone", "Tone")}</label>
              <div className="seg">
                <button
                  type="button"
                  className={`seg-btn ${tone === "formal" ? "active" : ""}`}
                  onClick={() => setTone("formal")}
                >
                  {get("try_tone_formal", "Formal")}
                </button>

                <button
                  type="button"
                  className={`seg-btn ${tone === "friendly" ? "active" : ""}`}
                  onClick={() => setTone("friendly")}
                >
                  {get("try_tone_friendly", "Friendly")}
                </button>

                <button
                  type="button"
                  className={`seg-btn ${tone === "bold" ? "active" : ""}`}
                  onClick={() => setTone("bold")}
                >
                  {get("try_tone_bold", "Bold")}
                </button>
              </div>
            </div>

            <div className="try-actions">
              <button className="btn btn-primary" onClick={goCTA}>
                {get("try_btn_generate", "Generate my CV")}
              </button>

              <a className="btn btn-ghost" href="#features">
                {get("try_btn_features", "See what you get")}
              </a>
            </div>
          </div>
        </div>

        {/* Right: preview */}
        <div className="try-right">
          <div className="preview-card pop">
            <div className="preview-head">
              <span className="preview-badge">{get("try_live_preview", "Live preview")}</span>
              <span className="preview-mini">
                {goal} • {level} • {tone}
              </span>
            </div>

            <h3 className="preview-title">{preview.title}</h3>
            <p className="preview-body">{preview.body}</p>

            <ul className="preview-list">
              {preview.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
