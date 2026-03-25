const fr = {
    languageToggle: {
        label: "Langue",
        en: "EN",
        fr: "FR",
        ar: "AR",
    },
    nav: {
        home: "Accueil",
        howItWorks: "Comment ça marche",
        contactUs: "Nous contacter",
        createAccount: "Créer un compte",
        login: "Connexion",
    },
    hero: {
        badge: "Sélectionné pour GITEX Supernova 2026",
        title: "Ton dossier médical parle pour toi, même inconscient.",
        subtitle:
            "HayatID — identité médicale portable. QR code + NFC. Accès en 10 secondes. Sans application.",
        ctaPrimary: "Rejoindre la liste d'attente",
        ctaSecondary: "Commander votre carte NFC",
        eventNote: "En direct à GITEX Supernova 2026",
        supportBrand: "2KS / Key Kingdom Solutions",
        visualCardLabel: "Carte NFC",
        visualAlert: "Urgence",
        visualTitle: "Dossier médical",
        visualBody: "Groupe sanguin, allergies, traitements, contacts d'urgence.",
        visualTiming: "Accès en 10 secondes",
    },
    problem: {
        title: "Le Probleme",
        stats: [
            {
                value: "75%",
                label: "des décès au Maroc sont liés à des maladies chroniques non diagnostiquées à temps",
            },
            {
                value: "2h47",
                label: "temps moyen avant diagnostic en urgence sans antécédents",
            },
            {
                value: "0",
                label: "solution portable d'identité médicale au Maroc aujourd'hui",
            },
        ],
        hook: "À 3h du matin, inconscient, sur l'Avenue Mohammed VI - qui parle pour toi ?",
    },
    solution: {
        title: "La Solution",
        steps: [
            {
                title: "Un passant scanne la carte",
                text: "QR code ou NFC, lecture immédiate sans application.",
            },
            {
                title: "La page urgence s'affiche",
                text: "Les informations critiques apparaissent en quelques secondes.",
            },
            {
                title: "Le médecin va plus loin",
                text: "Décision plus rapide, orientation clinique plus sûre.",
            },
        ],
        badge: "Zéro application côté lecteur - tout navigateur, tout appareil",
    },
    stats: {
        title: "Validation en chiffres",
        items: [
            { value: "66", label: "tests professionnels reels" },
            { value: "8.7/10", label: "note moyenne de satisfaction" },
            { value: "91%", label: "confirment le probleme quotidien" },
            { value: "88%", label: "adoption declaree" },
        ],
        note: "Validation terrain aupres de medecins, infirmiers et pharmaciens a Marrakech.",
    },
    howItWorks: {
        title: "Scanne. Vois. Sauve.",
        qrAlt: "QR HayatID urgence",
        linkLabel: "Voir la page d’accès urgence →",
        note: "Profil fictif. Aucun lecteur n’a besoin d’application.",
    },
    waitlist: {
        title: "Soyez parmi les premiers.",
        subtitle:
            "Cliniques, pharmacies, medecins - les 50 premiers partenaires beneficient de 6 mois offerts.",
        namePlaceholder: "Nom ou structure",
        emailPlaceholder: "Email professionnel",
        rolePlaceholder: "Role",
        roles: ["Medecin", "Pharmacien", "Clinique", "Investisseur", "Autre"],
        submitLabel: "Rejoindre la liste",
        submittingLabel: "Envoi en cours...",
        successMessage: "Recu. L equipe HayatID vous contacte dans les 48h.",
        errorMessage: "Une erreur est survenue. Merci de reessayer.",
        missingEndpointMessage:
            "Configuration formulaire manquante. Ajoutez VITE_FORMSPREE_ENDPOINT.",
        phonePlaceholder: "Tel: +212 XX XX XX XX XX",
    },
    footer: {
        tagline: "Identite medicale portable - Marrakech, Maroc",
        email: "contact@hayatid.ma",
        legalNotes: [
            "Marque déposée à l’OMPIC - Classes 9, 10, 42",
            "SARL HayatID en cours de création - Marrakech 2026",
            "Données fictives — aucune donnée réelle sur ce site",
        ],
    },
    login: {
        title: "Bienvenue",
        subtitle: "Connectez-vous à votre compte HayatID",
        emailLabel: "Email ou numéro de téléphone",
        emailPlaceholder: "Email ou +212 6XX XXX XXX",
        passwordLabel: "Mot de passe",
        passwordPlaceholder: "••••••••",
        submitLabel: "Se connecter",
        signingIn: "Connexion…",
        welcomeBack: "Connexion réussie. Redirection vers votre tableau de bord.",
        noAccount: "Pas encore de compte ?",
        createAccountLink: "Créer un compte",
        backHome: "Retour à l’accueil",
    },
    createAccount: {
        title: "Créez votre HayatID",
        subtitle: "Identité médicale sécurisée en 3 étapes",
        backHome: "Retour à l’accueil",
        haveAccount: "Déjà un compte ?",
        loginLink: "Se connecter",
        steps: {
            deviceKey: {
                title: "Entrez votre clé d’appareil",
                label: "Clé d’appareil",
                placeholder: "HID-XXXX-XXXX-XXXX",
                helpText: "Votre clé est imprimée au dos de votre carte NFC.",
                keyError: "Veuillez entrer une clé valide (minimum 8 caractères).",
                next: "Continuer",
            },
            cardVerification: {
                title: "Vérifiez votre carte NFC",
                instruction: "Approchez votre carte NFC de l’appareil pour la vérifier.",
                tapToScan: "Toucher pour vérifier la carte",
                scanning: "Vérification en cours…",
                verified: "Carte vérifiée",
                next: "Continuer",
            },
            connectPhone: {
                title: "Connectez votre téléphone",
                instruction: "Posez votre téléphone sur la carte NFC pour finaliser l’appairage.",
                tapToConnect: "Toucher pour connecter",
                connecting: "Appairage…",
                connected: "Appareil associé",
                next: "Finaliser la configuration",
            },
        },
        success: {
            title: "Tout est prêt !",
            subtitle: "Votre HayatID est actif. Les secouristes peuvent accéder à votre profil critique en quelques secondes.",
            action: "Retour à l’accueil",
        },
    },
};

export default fr;
