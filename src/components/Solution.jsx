function Solution({ content }) {
    const icons = ["01", "02", "03"];

    return (
        <section className="solution-section">
            <h2 className="section-header">{content.title}</h2>
            <div className="solution-steps">
                {content.steps.map((step, index) => (
                    <article className="solution-step-card" key={step.title}>
                        <span className="solution-icon" aria-hidden="true">
                            {icons[index]}
                        </span>
                        <h3>{step.title}</h3>
                        <p>{step.text}</p>
                    </article>
                ))}
            </div>
            <p className="solution-badge">{content.badge}</p>
        </section>
    );
}

export default Solution;
