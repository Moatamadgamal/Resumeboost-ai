import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function TestAuth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [msg, setMsg] = useState("");

  async function handleSignup(e) {
    e.preventDefault();
    setMsg("Loading...");

    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      setMsg(`✅ Signed up: ${cred.user.email}`);
      console.log("USER:", cred.user);
    } catch (err) {
      setMsg(`❌ ${err.code} - ${err.message}`);
    }
  }

  async function handleLogin(e) {
    e.preventDefault();
    setMsg("Loading...");

    try {
      const cred = await signInWithEmailAndPassword(auth, email, password);
      setMsg(`✅ Logged in: ${cred.user.email}`);
      console.log("USER:", cred.user);
    } catch (err) {
      setMsg(`❌ ${err.code} - ${err.message}`);
    }
  }

  return (
    <div style={{ maxWidth: 420, margin: "40px auto", padding: 20, border: "1px solid #333", borderRadius: 12 }}>
      <h2 style={{ marginBottom: 10 }}>Test Firebase Auth</h2>

      <form onSubmit={handleSignup}>
        <label>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="test@email.com"
          style={{ width: "100%", padding: 10, margin: "6px 0 12px", borderRadius: 8 }}
        />

        <label>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Min 6 chars"
          style={{ width: "100%", padding: 10, margin: "6px 0 12px", borderRadius: 8 }}
        />

        <div style={{ display: "flex", gap: 10 }}>
          <button type="submit" style={{ flex: 1, padding: 10, borderRadius: 8, cursor: "pointer" }}>
            Sign up
          </button>

          <button type="button" onClick={handleLogin} style={{ flex: 1, padding: 10, borderRadius: 8, cursor: "pointer" }}>
            Log in
          </button>
        </div>
      </form>

      <p style={{ marginTop: 12 }}>{msg}</p>
    </div>
  );
}
