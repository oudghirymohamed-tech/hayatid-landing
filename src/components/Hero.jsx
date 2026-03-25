function Hero({ content }) {
    return (
        <section className="hero" id="top">
            <div className="hero-grid">
                <div>
                    <span className="hero-badge">{content.badge}</span>
                    <div className="hero-brand" aria-label="Branding">
                        <div className="hero-brand-main">
                            <img src="/hayatid-logo.png" alt="HayatID primary brand" loading="lazy" />
                        </div>
                        <div className="hero-brand-support">
                            <img src="/ks-logo.png" alt="2KS company mark" loading="lazy" />
                            <span>{content.supportBrand}</span>
                        </div>
                    </div>
                    <h1>{content.title}</h1>
                    <p>{content.subtitle}</p>
                    <div className="hero-actions">
                        <a className="btn btn-primary" href="#waitlist">
                            {content.ctaPrimary}
                        </a>
                        <a className="btn btn-secondary" href="/demo.html" target="_blank" rel="noreferrer">
                            {content.ctaSecondary}
                        </a>
                    </div>
                    <p>{content.eventNote}</p>
                </div>
                <div className="hero-image">
                    <div className="mock-scene" aria-label="NFC emergency preview">
                        <div className="mock-card">
                            <span>{content.visualCardLabel}</span>
                            <strong>HayatID</strong>
                        </div>
                        <div className="mock-phone">
                            <div className="mock-phone-top" />
                            <div className="mock-screen">
                                <p className="mock-alert">{content.visualAlert}</p>
                                <h3>{content.visualTitle}</h3>
                                <p>{content.visualBody}</p>
                                <span>{content.visualTiming}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
