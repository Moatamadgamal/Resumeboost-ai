import { useEffect, useState } from "react";
import { translations } from "./i18n";
import { applyTheme, getInitialTheme } from "./theme";

import Navbar from "./components/Navbar";
import AuthModal from "./components/AuthModal";

import Hero from "./components/Hero";
import TryIt from "./components/TryIt";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  const [lang, setLang] = useState("en");
  const t = translations[lang];

  const [theme, setTheme] = useState(getInitialTheme());
  useEffect(() => applyTheme(theme), [theme]);

  // Auth modal state
  const [authOpen, setAuthOpen] = useState(false);
  const [authTab, setAuthTab] = useState("login"); // login | signup
  const [user, setUser] = useState(null);

  function openAuth(tab) {
    setAuthTab(tab);
    setAuthOpen(true);
  }

  return (
    <>
      <Navbar
        lang={lang}
        setLang={setLang}
        t={t}
        theme={theme}
        setTheme={setTheme}
        onOpenAuth={openAuth}
        user={user}
      />

      <AuthModal
        open={authOpen}
        initialTab={authTab}
        onClose={() => setAuthOpen(false)}
        onAuth={(session) => setUser(session)}
        t={t}
      />

      <Hero t={t} />
      <TryIt t={t} />
      <Features t={t} />
      <CTA t={t} />
      <Footer t={t} />
    </>
  );
}
