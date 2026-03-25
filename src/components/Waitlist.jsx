import { useState } from "react";

function Waitlist({ content }) {
    const [status, setStatus] = useState("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || "";
    const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || "contact@hayatid.ma";

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const payload = {
            name: (formData.get("name") || "").toString(),
            email: (formData.get("email") || "").toString(),
            role: (formData.get("role") || "").toString(),
            source: "hayatid-teaser",
        };

        if (!formspreeEndpoint) {
            const subject = encodeURIComponent("HayatID Waitlist");
            const body = encodeURIComponent(
                `Name: ${payload.name}\nEmail: ${payload.email}\nRole: ${payload.role}\nSource: ${payload.source}`,
            );

            window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
            event.currentTarget.reset();
            setStatus("success");
            setErrorMessage("");
            return;
        }

        setStatus("submitting");
        setErrorMessage("");

        try {
            const response = await fetch(formspreeEndpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error("submit_failed");
            }

            event.currentTarget.reset();
            setStatus("success");
        } catch {
            setStatus("error");
            setErrorMessage(content.errorMessage);
        }
    };

    return (
        <section id="waitlist">
            <h2 className="section-header">{content.title}</h2>
            <p>{content.subtitle}</p>
            <form className="waitlist-form" onSubmit={handleSubmit}>
                <input type="text" name="name" required placeholder={content.namePlaceholder} />
                <input type="email" name="email" required placeholder={content.emailPlaceholder} />
                <select name="role" required defaultValue="">
                    <option value="" disabled>
                        {content.rolePlaceholder}
                    </option>
                    {content.roles.map((role) => (
                        <option key={role} value={role}>
                            {role}
                        </option>
                    ))}
                </select>
                <button className="btn btn-primary" type="submit" disabled={status === "submitting"}>
                    {status === "submitting" ? content.submittingLabel : content.submitLabel}
                </button>
            </form>
            {status === "success" ? (
                <p className="notice notice-success" role="status" aria-live="polite">
                    {content.successMessage}
                </p>
            ) : null}
            {status === "error" ? <p className="notice notice-error">{errorMessage}</p> : null}
            <div className="waitlist-contact">
                <p>{content.phonePlaceholder}</p>
                <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </div>
        </section>
    );
}

export default Waitlist;
