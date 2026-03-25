function Footer({ content }) {
    const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || content.email;

    return (
        <footer className="footer">
            <div className="footer-brand" aria-label="Footer branding">
                <div className="footer-brand-main">
                    <img src="/hayatid-logo.png" alt="HayatID" loading="lazy" />
                </div>
            </div>
            <p className="footer-tagline">{content.tagline}</p>
            <a className="footer-email" href={`mailto:${contactEmail}`}>
                {contactEmail}
            </a>
            <ul className="footer-legal">
                {content.legalNotes.map((note) => (
                    <li key={note}>{note}</li>
                ))}
            </ul>
        </footer>
    );
}

export default Footer;
