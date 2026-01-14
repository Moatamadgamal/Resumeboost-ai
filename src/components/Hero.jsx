import { motion } from "framer-motion";
import { heroContainer, fadeUp, floatIn, buttonTap } from "../animations";

export default function Hero({ t }) {
  const get = (key, fallback) => (t && t[key]) || fallback;

  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        {/* LEFT */}
        <motion.div
          className="hero-left"
          variants={heroContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          <motion.p className="pill" variants={fadeUp}>
            {get("hero_pill", "Practical AI for your career")}
          </motion.p>

          <motion.h1 className="hero-title" variants={fadeUp}>
            {get("hero_title_1", "Turn your CV into a")}{" "}
            <span className="grad">{get("hero_title_2", "job-ready")}</span>{" "}
            {get("hero_title_3", "profile.")}
          </motion.h1>

          <motion.p className="hero-sub" variants={fadeUp}>
            {get(
              "hero_sub",
              "Generate a tailored summary, highlight the right skills, and get a clean structure — in minutes."
            )}
          </motion.p>

          <motion.div className="hero-actions" variants={fadeUp}>
            <motion.a
              className="btn btn-primary"
              href="#try"
              whileHover={buttonTap.hover}
              whileTap={buttonTap.tap}
            >
              {get("btn_build_now", "Build my CV now")}
            </motion.a>

            <motion.a
              className="btn btn-ghost"
              href="#features"
              whileHover={buttonTap.hover}
              whileTap={buttonTap.tap}
            >
              {get("btn_how", "How it works")}
            </motion.a>
          </motion.div>

          <motion.div className="hero-stats" variants={fadeUp}>
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
          </motion.div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="hero-right float"
          variants={floatIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          // subtle floating loop (very light)
          animate={{
            y: [0, -10, 0],
            rotate: [0, 0.4, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
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

            <motion.button
              className="pdf-btn"
              type="button"
              whileHover={buttonTap.hover}
              whileTap={buttonTap.tap}
              onClick={() =>
                document.querySelector("#try")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {get("pdf_btn", "Generate preview")}
            </motion.button>
          </div>

          {/* Glow breathing (subtle) */}
          <motion.div
            className="glow"
            aria-hidden="true"
            animate={{ opacity: [0.35, 0.7, 0.35], scale: [1, 1.03, 1] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
