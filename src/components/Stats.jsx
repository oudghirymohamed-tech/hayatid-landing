function Stats({ content }) {
    return (
        <section className="stats-section">
            <h2 className="section-header">{content.title}</h2>
            <div className="stats-grid">
                {content.items.map((item) => (
                    <article className="stat-card" key={item.label}>
                        <div className="stat-value">{item.value}</div>
                        <p className="stat-label">{item.label}</p>
                    </article>
                ))}
            </div>
            <p className="stats-note">{content.note}</p>
        </section>
    );
}

export default Stats;
