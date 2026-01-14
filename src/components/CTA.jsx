export default function CTA({ t }) {
  const get = (key, fallback) => (t && t[key]) || fallback;

  function goTry(e) {
    e.preventDefault();
    document.querySelector("#try")?.scrollIntoView({ behavior: "smooth" });
  }

  function goFeatures(e) {
    e.preventDefault();
    document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section id="cta" className="cta">
      <div className="container cta-box">
        <div className="cta-left fade-up">
          <h2 className="cta-title">
            {get("cta_title_1", "Ready to build a")}{" "}
            <span className="grad">
              {get("cta_title_2", "job-ready CV")}
            </span>
            ?
          </h2>

          <p className="cta-sub">
            {get(
              "cta_sub",
              "You’ve seen how it works. Pick your goal, level, and tone — and generate your CV in minutes."
            )}
          </p>

          <div className="cta-actions">
            <a href="#try" className="btn btn-primary" onClick={goTry}>
              {get("cta_btn_primary", "Build my CV now")}
            </a>

            <a href="#features" className="btn btn-ghost" onClick={goFeatures}>
              {get("cta_btn_secondary", "Review features")}
            </a>
          </div>

          <div className="cta-proof">
            <span>{get("cta_proof_1", "✓ No signup required")}</span>
            <span>{get("cta_proof_2", "✓ ATS-friendly")}</span>
            <span>{get("cta_proof_3", "✓ Edit anytime")}</span>
          </div>
        </div>

        <div className="cta-right pop">
          <div className="cta-card">
            <h4>{get("cta_card_title", "Your CV includes:")}</h4>
            <ul>
              <li>{get("cta_card_1", "✔ Tailored professional summary")}</li>
              <li>{get("cta_card_2", "✔ Skills matched to your goal")}</li>
              <li>{get("cta_card_3", "✔ Achievement-focused bullet points")}</li>
              <li>{get("cta_card_4", "✔ Clean, recruiter-friendly layout")}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
