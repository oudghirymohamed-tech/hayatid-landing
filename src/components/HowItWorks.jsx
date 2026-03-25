function HowItWorks({ content }) {
    const demoUrl = import.meta.env.VITE_DEMO_URL?.trim() || "/demo.html";

    return (
        <section className="how-section">
            <h2 className="section-header">{content.title}</h2>
            <div className="how-demo-card">
                <img src="/qr-demo.png" alt={content.qrAlt} loading="lazy" />
                <a className="how-demo-link" href={demoUrl} target="_blank" rel="noopener noreferrer">
                    {content.demoLinkLabel}
                </a>
                <p className="how-note">{content.note}</p>
            </div>
        </section>
    );
}

export default HowItWorks;
