import { useEffect, useMemo, useState } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import LanguageToggle from "./components/LanguageToggle";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Stats from "./components/Stats";
import Waitlist from "./components/Waitlist";
import ar from "./i18n/ar";
import en from "./i18n/en";
import fr from "./i18n/fr";

const translations = { en, fr, ar };
const supportedLanguages = ["fr", "ar", "en"];
const languageStorageKey = "hayatid-language";

function detectDefaultLanguage() {
    const storedLanguage =
        typeof window !== "undefined" ? window.localStorage.getItem(languageStorageKey) : null;

    if (storedLanguage && supportedLanguages.includes(storedLanguage)) {
        return storedLanguage;
    }

    if (typeof navigator === "undefined" || !navigator.language) {
        return "en";
    }

    const locale = navigator.language.toLowerCase();
    return supportedLanguages.find((lang) => locale.startsWith(lang)) ?? "en";
}

function App() {
    const [language, setLanguage] = useState(detectDefaultLanguage);

    const copy = useMemo(() => translations[language] ?? translations.en, [language]);
    const isRtl = language === "ar";

    useEffect(() => {
        document.documentElement.lang = language;
        document.documentElement.dir = isRtl ? "rtl" : "ltr";
        window.localStorage.setItem(languageStorageKey, language);
    }, [isRtl, language]);

    return (
        <div className="app-shell">
            <LanguageToggle
                currentLanguage={language}
                setCurrentLanguage={setLanguage}
                labels={copy.languageToggle}
            />
            <main>
                <Hero content={copy.hero} />
                <Problem content={copy.problem} />
                <Solution content={copy.solution} />
                <Stats content={copy.stats} />
                <HowItWorks content={copy.howItWorks} />
                <Waitlist content={copy.waitlist} />
            </main>
            <Footer content={copy.footer} />
        </div>
    );
}

export default App;
