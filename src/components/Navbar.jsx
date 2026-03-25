import { Link, useLocation } from "react-router-dom";

function Navbar({ currentLanguage, setCurrentLanguage, labels }) {
    const location = useLocation();
    const isRtl = currentLanguage === "ar";
    const langOptions = ["en", "fr", "ar"];

    // On inner pages, nav links point back to landing page with hash
    const homeHref = "/";
    const howHref = location.pathname === "/" ? "#how-it-works" : "/#how-it-works";
    const contactHref = location.pathname === "/" ? "#waitlist" : "/#waitlist";

    return (
        <nav className="navbar" aria-label={labels.nav.home}>
            <div className="navbar-inner">
                <Link to="/" className="navbar-logo" aria-label="HayatID">
                    <img src="/hayatid-logo.png" alt="HayatID" />
                </Link>

                <div className="navbar-links">
                    <a href={homeHref}>{labels.nav.home}</a>
                    <a href={howHref}>{labels.nav.howItWorks}</a>
                    <a href={contactHref}>{labels.nav.contactUs}</a>
                </div>

                <div className="navbar-actions">
                    <Link
                        to="/login"
                        className={`btn btn-nav-secondary${location.pathname === "/login" ? " btn-nav-active" : ""}`}
                    >
                        {labels.nav.login}
                    </Link>
                    <Link
                        to="/create-account"
                        className={`btn btn-nav-primary${location.pathname === "/create-account" ? " btn-nav-active" : ""}`}
                    >
                        {labels.nav.createAccount}
                    </Link>

                    <div
                        className="navbar-lang"
                        role="group"
                        aria-label={labels.languageToggle.label}
                        style={isRtl ? { flexDirection: "row-reverse" } : undefined}
                    >
                        {langOptions.map((opt) => (
                            <button
                                key={opt}
                                type="button"
                                onClick={() => setCurrentLanguage(opt)}
                                className={currentLanguage === opt ? "active" : ""}
                                aria-pressed={currentLanguage === opt}
                                aria-label={`${labels.languageToggle.label}: ${labels.languageToggle[opt]}`}
                            >
                                {labels.languageToggle[opt]}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
