import { useState } from "react";
import { Link } from "react-router-dom";

function LoginPage({ content }) {
    const [values, setValues] = useState({ identifier: "", password: "" });
    const [status, setStatus] = useState("idle"); // idle | submitting | success

    function handleChange(e) {
        setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        setStatus("submitting");
        // Simulate authentication flow for presentation
        setTimeout(() => setStatus("success"), 1600);
    }

    return (
        <div className="auth-page">
            <div className="auth-card">
                <Link to="/" className="auth-back">
                    {content.backHome}
                </Link>

                <div className="auth-logo">
                    <img src="/hayatid-logo.png" alt="HayatID" />
                </div>

                <h1 className="auth-title">{content.title}</h1>
                <p className="auth-subtitle">{content.subtitle}</p>

                {status === "success" ? (
                    <div className="auth-success" role="status" aria-live="polite">
                        <div className="auth-success-icon">✓</div>
                        <p>{content.welcomeBack}</p>
                    </div>
                ) : (
                    <form className="auth-form" onSubmit={handleSubmit} noValidate>
                        <div className="auth-field">
                            <label htmlFor="login-identifier">{content.emailLabel}</label>
                            <input
                                id="login-identifier"
                                name="identifier"
                                type="text"
                                autoComplete="email"
                                placeholder={content.emailPlaceholder}
                                value={values.identifier}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="auth-field">
                            <label htmlFor="login-password">{content.passwordLabel}</label>
                            <input
                                id="login-password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                placeholder={content.passwordPlaceholder}
                                value={values.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary auth-submit"
                            disabled={status === "submitting"}
                        >
                            {status === "submitting" ? content.signingIn : content.submitLabel}
                        </button>
                    </form>
                )}

                {status !== "success" && (
                    <p className="auth-switch">
                        {content.noAccount}{" "}
                        <Link to="/create-account">{content.createAccountLink}</Link>
                    </p>
                )}
            </div>
        </div>
    );
}

export default LoginPage;
