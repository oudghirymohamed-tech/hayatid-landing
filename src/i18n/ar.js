const ar = {
    languageToggle: {
        label: "اللغة",
        en: "EN",
        fr: "FR",
        ar: "AR",
    },
    nav: {
        home: "الرئيسية",
        howItWorks: "كيف يعمل",
        contactUs: "اتصل بنا",
        createAccount: "إنشاء حساب",
        login: "تسجيل الدخول",
    },
    hero: {
        badge: "تم اختيارنا في GITEX Supernova 2026",
        title: "في الطوارئ، ملفك يتكلم عنك.",
        subtitle:
            "HayatID - هوية طبية محمولة. QR + NFC. وصول خلال 10 ثوان. بدون تطبيق.",
        ctaPrimary: "انضم إلى قائمة الانتظار",
        ctaSecondary: "اطلب بطاقتك NFC",
        eventNote: "مباشر في GITEX Supernova 2026",
        supportBrand: "2KS / Key Kingdom Solutions",
        visualCardLabel: "بطاقة NFC",
        visualAlert: "حالة طوارئ",
        visualTitle: "الملف الطبي",
        visualBody: "فصيلة الدم، الحساسية، العلاجات، جهات اتصال الطوارئ.",
        visualTiming: "وصول خلال 10 ثوان",
    },
    problem: {
        title: "المشكلة",
        stats: [
            {
                value: "75%",
                label: "من الوفيات في المغرب مرتبطة بأمراض مزمنة لم تُشخّص في الوقت المناسب",
            },
            {
                value: "2h47",
                label: "متوسط الوقت قبل التشخيص في الطوارئ عند غياب السوابق الطبية",
            },
            {
                value: "0",
                label: "حلول هوية طبية محمولة متاحة في المغرب اليوم",
            },
        ],
        hook: "عند الثالثة صباحاً، فاقداً للوعي في شارع محمد السادس - من يتكلم عنك؟",
    },
    solution: {
        title: "الحل",
        steps: [
            {
                title: "أحد المارة يمسح البطاقة",
                text: "قراءة فورية عبر QR أو NFC بدون تطبيق.",
            },
            {
                title: "تظهر صفحة الطوارئ",
                text: "تظهر المعلومات الحرجة خلال ثوانٍ.",
            },
            {
                title: "الطبيب يذهب أبعد",
                text: "قرار أسرع وتوجيه سريري أكثر أماناً.",
            },
        ],
        badge: "بدون تطبيق للقارئ - أي متصفح، أي جهاز",
    },
    stats: {
        title: "التحقق الميداني",
        items: [
            { value: "66", label: "اختبارا مهنيا حقيقيا" },
            { value: "8.7/10", label: "متوسط تقييم الرضا" },
            { value: "91%", label: "يؤكدون المشكلة اليومية" },
            { value: "88%", label: "اعتماد معلن" },
        ],
        note: "تحقق ميداني مع اطباء وممرضين وصيادلة في مراكش.",
    },
    howItWorks: {
        title: "امسح. شاهد. أنقذ.",
        qrAlt: "رمز QR لطوارئ HayatID",
        linkLabel: "عرض صفحة الوصول الطارئ →",
        note: "الملف المعروض خيالي. لا يحتاج القارئ إلى تطبيق.",
    },
    waitlist: {
        title: "كن من الاوائل.",
        subtitle:
            "العيادات والصيدليات والاطباء - اول 50 شريكا يحصلون على 6 اشهر مجانية.",
        namePlaceholder: "الاسم او الجهة",
        emailPlaceholder: "البريد المهني",
        rolePlaceholder: "الدور",
        roles: ["طبيب", "صيدلي", "عيادة", "مستثمر", "اخر"],
        submitLabel: "انضم الى القائمة",
        submittingLabel: "جار الارسال...",
        successMessage: "تم الاستلام. سيتواصل فريق HayatID معك خلال 48 ساعة.",
        errorMessage: "حدث خطأ. يرجى المحاولة مرة اخرى.",
        missingEndpointMessage: "اعداد النموذج مفقود. اضف VITE_FORMSPREE_ENDPOINT.",
        phonePlaceholder: "الهاتف: +212 XX XX XX XX XX",
    },
    footer: {
        tagline: "هوية طبية محمولة - مراكش، المغرب",
        email: "contact@hayatid.ma",
        legalNotes: [
            "العلامة مودعة لدى OMPIC - الأصناف 9 و 10 و 42",
            "شركة HayatID قيد التأسيس - مراكش 2026",
            "بيانات نموذجية فقط — لا توجد بيانات حقيقية على هذا الموقع",
        ],
    },
    login: {
        title: "مرحباً بعودتك",
        subtitle: "سجّل الدخول إلى حساب HayatID الخاص بك",
        emailLabel: "البريد الإلكتروني أو رقم الهاتف",
        emailPlaceholder: "بريد إلكتروني أو ‏+212 6XX XXX XXX",
        passwordLabel: "كلمة المرور",
        passwordPlaceholder: "••••••••",
        submitLabel: "تسجيل الدخول",
        signingIn: "جاري تسجيل الدخول…",
        welcomeBack: "تم تسجيل الدخول بنجاح. جاري التوجيه إلى لوحة التحكم.",
        noAccount: "ليس لديك حساب؟",
        createAccountLink: "إنشاء حساب",
        backHome: "العودة إلى الرئيسية",
    },
    createAccount: {
        title: "أنشئ هويتك HayatID",
        subtitle: "هوية طبية آمنة في 3 خطوات",
        backHome: "العودة إلى الرئيسية",
        haveAccount: "لديك حساب بالفعل؟",
        loginLink: "تسجيل الدخول",
        steps: {
            deviceKey: {
                title: "أدخل مفتاح جهازك",
                label: "مفتاح الجهاز",
                placeholder: "HID-XXXX-XXXX-XXXX",
                helpText: "مفتاحك مطبوع على ظهر بطاقتك NFC.",
                keyError: "يرجى إدخال مفتاح صحيح (8 أحرف على الأقل).",
                next: "متابعة",
            },
            cardVerification: {
                title: "تحقق من بطاقتك NFC",
                instruction: "قرّب بطاقتك NFC من الجهاز للتحقق منها.",
                tapToScan: "المس للتحقق من البطاقة",
                scanning: "جاري التحقق…",
                verified: "تم التحقق من البطاقة",
                next: "متابعة",
            },
            connectPhone: {
                title: "ربط هاتفك",
                instruction: "ضع هاتفك على بطاقة NFC لإتمام الإقران الآمن.",
                tapToConnect: "المس للاتصال",
                connecting: "جاري الإقران…",
                connected: "تم ربط الجهاز",
                next: "إتمام الإعداد",
            },
        },
        success: {
            title: "أنت جاهز!",
            subtitle: "هويتك HayatID نشطة. يمكن لفرق الطوارئ الآن الوصول إلى ملفك الحيوي خلال ثوانٍ.",
            action: "العودة إلى الرئيسية",
        },
    },
};

export default ar;
