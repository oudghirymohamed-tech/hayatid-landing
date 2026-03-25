function LanguageToggle({ currentLanguage, setCurrentLanguage, labels }) {
    const options = ["en", "fr", "ar"];

    return (
        <header className="lang-toggle" aria-label={labels.label}>
            <span className="lang-label">{labels.label}</span>
            <div className="lang-options">
                {options.map((option) => (
                    <button
                        key={option}
                        type="button"
                        aria-label={`${labels.label}: ${labels[option]}`}
                        className={currentLanguage === option ? "active" : ""}
                        onClick={() => setCurrentLanguage(option)}
                        aria-pressed={currentLanguage === option}
                    >
                        {labels[option]}
                    </button>
                ))}
            </div>
        </header>
    );
}

export default LanguageToggle;
