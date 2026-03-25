import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const TOTAL_STEPS = 3;

function StepProgress({ current }) {
    return (
        <div className="step-progress" aria-label={`Step ${current + 1} of ${TOTAL_STEPS}`}>
            {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
                <div
                    key={i}
                    className={`step-dot${i < current ? " done" : i === current ? " active" : ""}`}
                />
            ))}
        </div>
    );
}

// ── Step 1: Device key ────────────────────────────────────────────────────────
function DeviceKeyStep({ content, onNext }) {
    const [key, setKey] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (key.trim().length < 8) {
            setError(content.keyError);
            return;
        }
        setError("");
        onNext();
    }

    return (
        <div className="step-content">
            <div className="step-icon" aria-hidden="true">🔑</div>
            <h2 className="step-title">{content.title}</h2>
            <form onSubmit={handleSubmit} className="auth-form" noValidate>
                <div className="auth-field">
                    <label htmlFor="device-key">{content.label}</label>
                    <input
                        id="device-key"
                        type="text"
                        placeholder={content.placeholder}
                        value={key}
                        onChange={(e) => setKey(e.target.value)}
                        required
                        autoComplete="off"
                        spellCheck={false}
                    />
                    {error && <span className="field-error" role="alert">{error}</span>}
                    <span className="field-help">{content.helpText}</span>
                </div>
                <button type="submit" className="btn btn-primary auth-submit">
                    {content.next}
                </button>
            </form>
        </div>
    );
}

// ── Step 2: NFC card verification ─────────────────────────────────────────────
function CardVerificationStep({ content, onNext }) {
    const [phase, setPhase] = useState("idle"); // idle | scanning | verified
    const timerRef = useRef(null);

    function startScan() {
        setPhase("scanning");
        timerRef.current = setTimeout(() => setPhase("verified"), 2800);
    }

    useEffect(() => () => clearTimeout(timerRef.current), []);

    return (
        <div className="step-content">
            <div className="step-icon" aria-hidden="true">📶</div>
            <h2 className="step-title">{content.title}</h2>
            <p className="step-instruction">{content.instruction}</p>
            <div className={`nfc-visual nfc-${phase}`} aria-live="polite">
                {phase === "idle" && (
                    <button className="nfc-trigger" type="button" onClick={startScan}>
                        {content.tapToScan}
                    </button>
                )}
                {phase === "scanning" && (
                    <div className="nfc-scanning">
                        <div className="nfc-pulse" aria-hidden="true" />
                        <span>{content.scanning}</span>
                    </div>
                )}
                {phase === "verified" && (
                    <div className="nfc-verified">
                        <div className="auth-success-icon">✓</div>
                        <span>{content.verified}</span>
                    </div>
                )}
            </div>
            <button
                className="btn btn-primary auth-submit"
                type="button"
                onClick={onNext}
                disabled={phase !== "verified"}
            >
                {content.next}
            </button>
        </div>
    );
}

// ── Step 3: Connect phone ──────────────────────────────────────────────────────
function ConnectPhoneStep({ content, onNext }) {
    const [phase, setPhase] = useState("idle"); // idle | connecting | connected
    const timerRef = useRef(null);

    function startConnect() {
        setPhase("connecting");
        timerRef.current = setTimeout(() => setPhase("connected"), 2500);
    }

    useEffect(() => () => clearTimeout(timerRef.current), []);

    return (
        <div className="step-content">
            <div className="step-icon" aria-hidden="true">📱</div>
            <h2 className="step-title">{content.title}</h2>
            <p className="step-instruction">{content.instruction}</p>
            <div className={`nfc-visual nfc-${phase}`} aria-live="polite">
                {phase === "idle" && (
                    <button className="nfc-trigger" type="button" onClick={startConnect}>
                        {content.tapToConnect}
                    </button>
                )}
                {phase === "connecting" && (
                    <div className="nfc-scanning">
                        <div className="nfc-pulse" aria-hidden="true" />
                        <span>{content.connecting}</span>
                    </div>
                )}
                {phase === "connected" && (
                    <div className="nfc-verified">
                        <div className="auth-success-icon">✓</div>
                        <span>{content.connected}</span>
                    </div>
                )}
            </div>
            <button
                className="btn btn-primary auth-submit"
                type="button"
                onClick={onNext}
                disabled={phase !== "connected"}
            >
                {content.next}
            </button>
        </div>
    );
}

// ── Success screen ─────────────────────────────────────────────────────────────
function SuccessScreen({ content }) {
    return (
        <div className="step-content step-success" role="status" aria-live="polite">
            <div className="auth-success-icon large">✓</div>
            <h2 className="step-title">{content.title}</h2>
            <p className="step-instruction">{content.subtitle}</p>
            <Link to="/" className="btn btn-primary auth-submit">
                {content.action}
            </Link>
        </div>
    );
}

// ── Main page ──────────────────────────────────────────────────────────────────
function CreateAccountPage({ content }) {
    const [step, setStep] = useState(0);
    const [done, setDone] = useState(false);

    const steps = content.steps;

    function handleNext() {
        if (step < TOTAL_STEPS - 1) {
            setStep((s) => s + 1);
        } else {
            setDone(true);
        }
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

                {!done ? (
                    <>
                        <h1 className="auth-title">{content.title}</h1>
                        <p className="auth-subtitle">{content.subtitle}</p>
                        <StepProgress current={step} />

                        {step === 0 && (
                            <DeviceKeyStep content={steps.deviceKey} onNext={handleNext} />
                        )}
                        {step === 1 && (
                            <CardVerificationStep content={steps.cardVerification} onNext={handleNext} />
                        )}
                        {step === 2 && (
                            <ConnectPhoneStep content={steps.connectPhone} onNext={handleNext} />
                        )}

                        <p className="auth-switch">
                            {content.haveAccount}{" "}
                            <Link to="/login">{content.loginLink}</Link>
                        </p>
                    </>
                ) : (
                    <SuccessScreen content={content.success} />
                )}
            </div>
        </div>
    );
}

export default CreateAccountPage;
