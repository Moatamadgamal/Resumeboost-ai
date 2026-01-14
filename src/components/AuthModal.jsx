import { useEffect, useState } from "react";
import { auth } from "../firebase";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

export default function AuthModal({ open, initialTab = "login", onClose, onAuth }) {
  const [tab, setTab] = useState(initialTab); // login | signup

  // login
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");

  // signup
  const [name, setName] = useState("");
  const [signEmail, setSignEmail] = useState("");
  const [signPass, setSignPass] = useState("");
  const [signPass2, setSignPass2] = useState("");

  const [msg, setMsg] = useState({ type: "", text: "" });

  useEffect(() => {
    if (open) {
      setTab(initialTab);
      setMsg({ type: "", text: "" });
    }
  }, [open, initialTab]);

  // ESC + lock scroll
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  function toast(type, text) {
    setMsg({ type, text });
    window.clearTimeout(window.__rb_toast);
    window.__rb_toast = window.setTimeout(() => setMsg({ type: "", text: "" }), 2500);
  }

  function onOverlayClick(e) {
    if (e.target === e.currentTarget) onClose?.();
  }

  function friendlyError(err) {
    const code = err?.code || "";
    if (code.includes("auth/email-already-in-use")) return "This email is already in use.";
    if (code.includes("auth/invalid-email")) return "Please enter a valid email.";
    if (code.includes("auth/weak-password")) return "Password must be at least 6 characters.";
    if (code.includes("auth/user-not-found")) return "Account not found. Create an account first.";
    if (code.includes("auth/wrong-password")) return "Wrong password.";
    if (code.includes("auth/invalid-credential")) return "Wrong email or password.";
    return "Something went wrong. Please try again.";
  }

  async function handleLogin(e) {
    e.preventDefault();
    setMsg({ type: "", text: "" });

    const email = loginEmail.trim();
    if (!email) return toast("error", "Please enter your email.");
    if (!loginPass) return toast("error", "Please enter your password.");

    try {
      const res = await signInWithEmailAndPassword(auth, email, loginPass);
      toast("success", "Signed in successfully.");

      onAuth?.({
        uid: res.user.uid,
        email: res.user.email,
        name: res.user.displayName || "",
      });

      setTimeout(() => onClose?.(), 600);
    } catch (err) {
      toast("error", friendlyError(err));
    }
  }

  async function handleSignup(e) {
    e.preventDefault();
    setMsg({ type: "", text: "" });

    const fullName = name.trim();
    const email = signEmail.trim();

    if (fullName.length < 2) return toast("error", "Please enter your name.");
    if (!email) return toast("error", "Please enter a valid email.");
    if (signPass.length < 6) return toast("error", "Password must be at least 6 characters.");
    if (signPass !== signPass2) return toast("error", "Passwords do not match.");

    try {
      const res = await createUserWithEmailAndPassword(auth, email, signPass);

      // set displayName
      await updateProfile(res.user, { displayName: fullName });

      toast("success", "Account created successfully.");

      onAuth?.({
        uid: res.user.uid,
        email: res.user.email,
        name: fullName,
      });

      setTimeout(() => onClose?.(), 700);
    } catch (err) {
      toast("error", friendlyError(err));
    }
  }

  return (
    <div className="modal-overlay" onMouseDown={onOverlayClick} role="dialog" aria-modal="true">
      <div className="modal">
        <div className="modal-top">
          <div className="modal-title">
            <div className="modal-brand">
              <span className="logo-dot" />
              <span>ResumeBoost AI</span>
            </div>
            <p className="modal-sub">Sign in to save your progress.</p>
          </div>

          <button className="modal-x" type="button" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>

        <div className="modal-tabs">
          <button
            type="button"
            className={`tab-btn ${tab === "login" ? "active" : ""}`}
            onClick={() => {
              setTab("login");
              setMsg({ type: "", text: "" });
            }}
          >
            Sign in
          </button>

          <button
            type="button"
            className={`tab-btn ${tab === "signup" ? "active" : ""}`}
            onClick={() => {
              setTab("signup");
              setMsg({ type: "", text: "" });
            }}
          >
            Create account
          </button>
        </div>

        {msg.text ? (
          <div className={`modal-msg ${msg.type === "success" ? "ok" : "err"}`}>{msg.text}</div>
        ) : null}

        {tab === "login" ? (
          <form className="modal-form" onSubmit={handleLogin}>
            <label className="label">Email</label>
            <input
              className="input"
              type="email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              placeholder="name@email.com"
              autoComplete="email"
            />

            <label className="label">Password</label>
            <input
              className="input"
              type="password"
              value={loginPass}
              onChange={(e) => setLoginPass(e.target.value)}
              placeholder="••••••••"
              autoComplete="current-password"
            />

            <button className="btn btn-primary w100" type="submit">
              Sign in
            </button>

            <p className="modal-mini">
              Don’t have an account?{" "}
              <button type="button" className="link-btn" onClick={() => setTab("signup")}>
                Create one
              </button>
            </p>
          </form>
        ) : (
          <form className="modal-form" onSubmit={handleSignup}>
            <label className="label">Full name</label>
            <input
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Mohamed Ali"
              autoComplete="name"
            />

            <label className="label">Email</label>
            <input
              className="input"
              type="email"
              value={signEmail}
              onChange={(e) => setSignEmail(e.target.value)}
              placeholder="name@email.com"
              autoComplete="email"
            />

            <label className="label">Password</label>
            <input
              className="input"
              type="password"
              value={signPass}
              onChange={(e) => setSignPass(e.target.value)}
              placeholder="At least 6 characters"
              autoComplete="new-password"
            />

            <label className="label">Confirm password</label>
            <input
              className="input"
              type="password"
              value={signPass2}
              onChange={(e) => setSignPass2(e.target.value)}
              placeholder="Repeat password"
              autoComplete="new-password"
            />

            <button className="btn btn-primary w100" type="submit">
              Create account
            </button>

            <p className="modal-mini">
              Already have an account?{" "}
              <button type="button" className="link-btn" onClick={() => setTab("login")}>
                Sign in
              </button>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
