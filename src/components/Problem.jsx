function Problem({ content }) {
    return (
        <section className="problem-section">
            <h2 className="section-header">{content.title}</h2>
            <div className="problem-stats">
                {content.stats.map((item) => (
                    <article className="problem-stat-card" key={item.value}>
                        <p className="problem-stat-value">{item.value}</p>
                        <p className="problem-stat-label">{item.label}</p>
                    </article>
                ))}
            </div>
            <p className="problem-hook">{content.hook}</p>
        </section>
    );
}

export default Problem;
