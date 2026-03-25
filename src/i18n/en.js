const en = {
    languageToggle: {
        label: "Language",
        en: "EN",
        fr: "FR",
        ar: "AR",
    },
    nav: {
        home: "Home",
        howItWorks: "How It Works",
        contactUs: "Contact Us",
        createAccount: "Create Account",
        login: "Login",
    },
    hero: {
        badge: "Selected for GITEX Supernova 2026",
        title: "In an emergency, your medical history speaks for you.",
        subtitle:
            "HayatID — portable medical identity. QR code + NFC. Access in 10 seconds. No app required.",
        ctaPrimary: "Join the waitlist",
        ctaSecondary: "Request your NFC card",
        eventNote: "Live at GITEX Supernova 2026",
        supportBrand: "2KS / Key Kingdom Solutions",
        visualCardLabel: "NFC Card",
        visualAlert: "Emergency",
        visualTitle: "Medical record",
        visualBody: "Blood type, allergies, treatments, emergency contacts.",
        visualTiming: "Access in 10 seconds",
    },
    problem: {
        title: "The Problem",
        stats: [
            {
                value: "75%",
                label: "of deaths in Morocco are linked to chronic diseases not diagnosed in time",
            },
            {
                value: "2h47",
                label: "average time before diagnosis in emergency care without prior history",
            },
            {
                value: "0",
                label: "portable medical identity solutions available in Morocco today",
            },
        ],
        hook: "At 3:00 a.m., unconscious on Avenue Mohammed VI - who speaks for you?",
    },
    solution: {
        title: "The Solution",
        steps: [
            {
                title: "A passerby scans the card",
                text: "QR code or NFC, instant read with no app.",
            },
            {
                title: "The emergency page opens",
                text: "Critical information appears in seconds.",
            },
            {
                title: "The doctor goes further",
                text: "Faster decisions and safer clinical direction.",
            },
        ],
        badge: "No app required for the reader - any browser, any device",
    },
    stats: {
        title: "Field Validation",
        items: [
            { value: "66", label: "real professional tests" },
            { value: "8.7/10", label: "average satisfaction score" },
            { value: "91%", label: "confirm the daily problem" },
            { value: "88%", label: "declared adoption" },
        ],
        note: "Field validation with doctors, nurses, and pharmacists in Marrakech.",
    },
    howItWorks: {
        title: "Scan. View. Save.",
        qrAlt: "HayatID emergency QR",
        linkLabel: "View emergency access page →",
        note: "Sample profile is fictional. No app required for the reader.",
    },
    waitlist: {
        title: "Be among the first.",
        subtitle:
            "Clinics, pharmacies, and doctors - the first 50 partners receive 6 months free.",
        namePlaceholder: "Name or organization",
        emailPlaceholder: "Professional email",
        rolePlaceholder: "Role",
        roles: ["Doctor", "Pharmacist", "Clinic", "Investor", "Other"],
        submitLabel: "Join the list",
        submittingLabel: "Submitting...",
        successMessage: "Received. The HayatID team will contact you within 48h.",
        errorMessage: "An error occurred. Please try again.",
        missingEndpointMessage: "Missing form configuration. Add VITE_FORMSPREE_ENDPOINT.",
        phonePlaceholder: "Phone: +212 XX XX XX XX XX",
    },
    footer: {
        tagline: "Portable medical identity - Marrakech, Morocco",
        email: "contact@hayatid.ma",
        legalNotes: [
            "Trademark filed with OMPIC - Classes 9, 10, 42",
            "HayatID LLC in formation - Marrakech 2026",
            "Sample data only — no real patient data on this site",
        ],
    },
    login: {
        title: "Welcome back",
        subtitle: "Sign in to your HayatID account",
        emailLabel: "Email or phone number",
        emailPlaceholder: "Email or +212 6XX XXX XXX",
        passwordLabel: "Password",
        passwordPlaceholder: "••••••••",
        submitLabel: "Sign in",
        signingIn: "Signing in…",
        welcomeBack: "Signed in successfully. Redirecting to your dashboard.",
        noAccount: "Don't have an account?",
        createAccountLink: "Create account",
        backHome: "Back to home",
    },
    createAccount: {
        title: "Create your HayatID",
        subtitle: "Secure medical identity in 3 steps",
        backHome: "Back to home",
        haveAccount: "Already have an account?",
        loginLink: "Sign in",
        steps: {
            deviceKey: {
                title: "Enter your device key",
                label: "Device key",
                placeholder: "HID-XXXX-XXXX-XXXX",
                helpText: "Your key is printed on the back of your NFC card.",
                keyError: "Please enter a valid device key (minimum 8 characters).",
                next: "Continue",
            },
            cardVerification: {
                title: "Verify your NFC card",
                instruction: "Hold your NFC card near your device to verify it.",
                tapToScan: "Tap to verify card",
                scanning: "Verifying card…",
                verified: "Card verified",
                next: "Continue",
            },
            connectPhone: {
                title: "Connect your phone",
                instruction: "Place your phone on the NFC card to complete the secure pairing.",
                tapToConnect: "Tap to connect",
                connecting: "Pairing…",
                connected: "Device paired",
                next: "Complete setup",
            },
        },
        success: {
            title: "You're all set!",
            subtitle: "Your HayatID is ready. Emergency responders can now access your critical profile in seconds.",
            action: "Go to home",
        },
    },
};

export default en;
