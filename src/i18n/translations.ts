/**
 * All user-facing text, in English and French.
 *
 * `en` defines the keys. `fr` is typed against it, so a missing French
 * translation is a TypeScript error (and a failing test).
 * Use {name} placeholders for values filled in at runtime.
 */
export const en = {
    // Site
    "meta.tagline": "Developer Portfolio",
    "meta.description":
        "Explore the portfolio of Davide Cipolla, a Computer Science student showcasing software projects, technical skills, and development experience.",

    // Navigation and header
    "nav.home": "Home",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.certificates": "Certificates",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.main": "Main navigation",
    "nav.openMenu": "Open navigation menu",
    "nav.closeMenu": "Close navigation menu",
    "nav.logoLabel": "Davide - Home",
    "header.themeToDark": "Switch to dark mode",
    "header.themeToLight": "Switch to light mode",
    "header.switchToOtherLanguage": "Passer au français",
    "header.otherLanguageCode": "FR",

    // Common
    "common.backHome": "Back to Home",
    "common.loading": "Loading",

    // Home
    "home.hello": "HELLO, I'M",
    "home.subtitle": "Computer Science Student & Developer",
    "home.description":
        "I build web applications and software projects, exploring new technologies and turning ideas into practical solutions.",
    "home.viewProjects": "View Projects",
    "home.contactMe": "Contact Me",
    "home.note": "BUILDING · LEARNING · CREATING",

    // About
    "about.metaDescription":
        "About Davide Cipolla: a second-year Computer Science Technology student at Cégep Marie-Victorin in Montréal, with frontend, full-stack, and hardware skills.",
    "about.heading": "About Me",
    "about.p1":
        "I'm a second-year Computer Science Technology student at Cégep Marie-Victorin in Montréal who enjoys programming, building applications, and exploring new technologies.",
    "about.p2":
        "I like solving problems and turning ideas into practical projects. At HackDécouverte 2026, I built a working web application in a team of four. I learn quickly, approach problems with method and independence, and stay calm and reliable when deadlines get close.",
    "about.p3": "I'm always curious to learn something new and take on new challenges.",
    "about.group.languages": "Languages",
    "about.group.frontend": "Frontend",
    "about.group.backend": "Backend & Data",
    "about.group.tools": "Tools",
    "about.group.hardware": "Hardware & Systems",
    "about.group.interpersonal": "Interpersonal Skills",
    "about.hardware.configuration": "Computer hardware configuration",
    "about.hardware.installation": "Computer hardware installation",
    "about.skill.teamwork": "Teamwork",
    "about.skill.communication": "Clear communication",
    "about.skill.deadlines": "Meeting deadlines",
    "about.skill.calm": "Calm under pressure",
    "about.skill.problemSolving": "Methodical problem-solving",
    "about.skill.quickLearner": "Quick learner",

    // Certificates
    "certificates.metaDescription":
        "Certificates and credentials earned by Davide Cipolla, a Computer Science Technology student in Montréal.",
    "certificates.heading": "Certificates",
    "certificates.intro":
        "Courses and credentials I've completed while learning and growing as a developer.",
    "certificates.empty": "Certificates will be added here soon.",
    "certificates.view": "View credential",
    "certificates.imageAlt": "Certificate: {name}",

    // Experience
    "experience.metaDescription":
        "Education, hackathon projects, volunteering, and languages of Davide Cipolla, a Computer Science Technology student in Montréal.",
    "experience.heading": "Experience",
    "experience.intro":
        "My education, the projects I've built with teams, and the volunteering that taught me to stay reliable and calm under pressure.",
    "experience.section.education": "Education",
    "experience.section.projects": "Projects & Hackathons",
    "experience.section.volunteering": "Volunteering",
    "experience.section.languages": "Languages",
    "experience.edu.cegep.title": "Computer Science Technology (Technique de l'informatique)",
    "experience.edu.cegep.org": "Cégep Marie-Victorin, Montréal, QC",
    "experience.edu.cegep.period": "Second year",
    "experience.hackathon.title": "Graph Your X",
    "experience.hackathon.org": "HackDécouverte 2026, Concordia University",
    "experience.hackathon.details": "Team project (4 members)",
    "experience.hackathon.point1":
        "Built a platform that maps the knowledge and prerequisites needed to reach a learning goal, showing where to start and what to learn next.",
    "experience.hackathon.point2": "Developed the frontend with React, TypeScript, and Vite.",
    "experience.hackathon.point3":
        "Worked with teammates on the Python (FastAPI) backend and SQLite database, and on how the frontend, API, and database fit together.",
    "experience.hackathon.point4":
        "Delivered a working app within the event's time limit through close coordination with a team of 4.",
    "experience.hackathon.link": "View source code",
    "experience.camp.title": "Volunteer, Smiley Bunch / Sunny Vibes Day Camp",
    "experience.camp.org": "Youth Ambition Montréal",
    "experience.camp.period": "Summer 2026",
    "experience.camp.point1": "Supervised and supported children during camp activities.",
    "experience.camp.point2":
        "Worked with camp leaders and fellow volunteers to keep activities running smoothly.",
    "experience.camp.point3":
        "Followed safety guidelines and prepared equipment and activity spaces.",
    "experience.openhouse.title": "Volunteer, School Open House Days",
    "experience.openhouse.org": "Several school open house events",
    "experience.openhouse.point1": "Welcomed visitors with courtesy and professionalism.",
    "experience.openhouse.point2": "Answered questions and directed visitors and vehicles.",
    "experience.openhouse.point3":
        "Collaborated with other volunteers to ensure the events ran smoothly.",
    "experience.cta.text": "Want more details? Contact me and I'll send you my CV.",
    "experience.cta.button": "Contact me",
    "experience.language.french": "French (fluent)",
    "experience.language.english": "English (fluent)",
    "experience.language.italian": "Italian (fluent)",
    "experience.language.spanish": "Spanish (basic)",

    // Projects
    "projects.metaDescription":
        "Software projects built by Davide Cipolla, with descriptions, technologies used, and links to the source code.",
    "projects.heading": "Projects",
    "projects.loading": "Loading projects...",
    "projects.error": "Unable to load projects. Please try again later.",
    "projects.emptyTitle": "No Projects Found",
    "projects.emptyText":
        "It looks like there aren't any projects added here just yet. Check back soon!",
    "projects.noMatch": "No projects found for this technology.",
    "projects.noDescription": "No description yet.",
    "projects.all": "All",
    "projects.filterLabel": "Filter projects by technology",
    "projects.techLabel": "Technologies used",
    "projects.featured": "Featured",
    "projects.imageAlt": "{title} logo",
    "projects.github": "GitHub",
    "projects.demo": "Live Demo",

    // Contact
    "contact.metaDescription": "Get in touch with Davide Cipolla by email, GitHub, or LinkedIn.",
    "contact.heading": "Contact",
    "contact.description": "Interested in working together? Feel free to reach out.",
    "contact.email": "Email",
    "contact.sendMessage": "Send a message",
    "contact.github": "GitHub",
    "contact.viewProjects": "View projects",
    "contact.linkedin": "LinkedIn",
    "contact.connect": "Connect",

    // Errors
    "notFound.title": "Not Found",
    "notFound.heading": "Page Not Found",
    "notFound.text":
        "Sorry, the page you're looking for doesn't exist or may have been moved.",
    "error.heading": "Oops! Something went wrong.",
    "error.unexpected": "An unexpected error occurred."
} as const;

export type TranslationKey = keyof typeof en;
export type Translations = Record<TranslationKey, string>;

export const fr: Translations = {
    // Site
    "meta.tagline": "Portfolio de développeur",
    "meta.description":
        "Découvrez le portfolio de Davide Cipolla, étudiant en informatique, avec ses projets logiciels, ses compétences techniques et son expérience en développement.",

    // Navigation and header
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.experience": "Expérience",
    "nav.certificates": "Certificats",
    "nav.projects": "Projets",
    "nav.contact": "Contact",
    "nav.main": "Navigation principale",
    "nav.openMenu": "Ouvrir le menu de navigation",
    "nav.closeMenu": "Fermer le menu de navigation",
    "nav.logoLabel": "Davide - Accueil",
    "header.themeToDark": "Passer au mode sombre",
    "header.themeToLight": "Passer au mode clair",
    "header.switchToOtherLanguage": "Switch to English",
    "header.otherLanguageCode": "EN",

    // Common
    "common.backHome": "Retour à l'accueil",
    "common.loading": "Chargement",

    // Home
    "home.hello": "BONJOUR, JE SUIS",
    "home.subtitle": "Étudiant en informatique et développeur",
    "home.description":
        "Je crée des applications web et des projets logiciels, j'explore de nouvelles technologies et je transforme des idées en solutions concrètes.",
    "home.viewProjects": "Voir les projets",
    "home.contactMe": "Me contacter",
    "home.note": "BÂTIR · APPRENDRE · CRÉER",

    // About
    "about.metaDescription":
        "À propos de Davide Cipolla : étudiant de deuxième année en Technique de l'informatique au Cégep Marie-Victorin à Montréal, avec des compétences en frontend, en développement complet et en matériel informatique.",
    "about.heading": "À propos de moi",
    "about.p1":
        "Je suis étudiant de deuxième année en Technique de l'informatique au Cégep Marie-Victorin à Montréal. J'aime programmer, créer des applications et explorer de nouvelles technologies.",
    "about.p2":
        "J'aime résoudre des problèmes et transformer des idées en projets concrets. À HackDécouverte 2026, j'ai réalisé une application web fonctionnelle en équipe de quatre. J'apprends rapidement, j'aborde les problèmes avec méthode et autonomie, et je reste calme et fiable quand les échéances approchent.",
    "about.p3":
        "Je suis toujours curieux d'apprendre de nouvelles choses et de relever de nouveaux défis.",
    "about.group.languages": "Langages",
    "about.group.frontend": "Frontend",
    "about.group.backend": "Backend et données",
    "about.group.tools": "Outils",
    "about.group.hardware": "Matériel et systèmes",
    "about.group.interpersonal": "Compétences interpersonnelles",
    "about.hardware.configuration": "Configuration de matériel informatique",
    "about.hardware.installation": "Installation de matériel informatique",
    "about.skill.teamwork": "Travail d'équipe",
    "about.skill.communication": "Communication claire",
    "about.skill.deadlines": "Respect des échéances",
    "about.skill.calm": "Calme sous pression",
    "about.skill.problemSolving": "Résolution de problèmes méthodique",
    "about.skill.quickLearner": "Apprentissage rapide",

    // Certificates
    "certificates.metaDescription":
        "Certificats et attestations obtenus par Davide Cipolla, étudiant en Technique de l'informatique à Montréal.",
    "certificates.heading": "Certificats",
    "certificates.intro":
        "Les cours et attestations que j'ai complétés au fil de mon parcours de développeur.",
    "certificates.empty": "Des certificats seront ajoutés ici bientôt.",
    "certificates.view": "Voir l'attestation",
    "certificates.imageAlt": "Certificat : {name}",

    // Experience
    "experience.metaDescription":
        "Formation, projets de hackathon, bénévolat et langues de Davide Cipolla, étudiant en Technique de l'informatique à Montréal.",
    "experience.heading": "Expérience",
    "experience.intro":
        "Ma formation, les projets réalisés en équipe et le bénévolat qui m'a appris à rester fiable et calme sous pression.",
    "experience.section.education": "Formation",
    "experience.section.projects": "Projets et hackathons",
    "experience.section.volunteering": "Bénévolat",
    "experience.section.languages": "Langues",
    "experience.edu.cegep.title": "Technique de l'informatique",
    "experience.edu.cegep.org": "Cégep Marie-Victorin, Montréal, QC",
    "experience.edu.cegep.period": "Deuxième année",
    "experience.hackathon.title": "Graph Your X",
    "experience.hackathon.org": "HackDécouverte 2026, Université Concordia",
    "experience.hackathon.details": "Projet d'équipe (4 membres)",
    "experience.hackathon.point1":
        "Création d'une plateforme qui cartographie les connaissances et les prérequis nécessaires pour atteindre un objectif d'apprentissage, en montrant par où commencer et quoi apprendre ensuite.",
    "experience.hackathon.point2":
        "Développement du frontend avec React, TypeScript et Vite.",
    "experience.hackathon.point3":
        "Collaboration avec l'équipe sur le backend Python (FastAPI) et la base de données SQLite, ainsi que sur l'intégration entre le frontend, l'API et la base de données.",
    "experience.hackathon.point4":
        "Livraison d'une application fonctionnelle dans le temps imparti grâce à une coordination étroite avec une équipe de 4 personnes.",
    "experience.hackathon.link": "Voir le code source",
    "experience.camp.title": "Bénévole, camp de jour Smiley Bunch / Sunny Vibes",
    "experience.camp.org": "Youth Ambition Montréal",
    "experience.camp.period": "Été 2026",
    "experience.camp.point1":
        "Supervision et accompagnement des enfants pendant les activités du camp.",
    "experience.camp.point2":
        "Collaboration avec les responsables et les autres bénévoles pour assurer le bon déroulement des activités.",
    "experience.camp.point3":
        "Respect des consignes de sécurité et préparation du matériel et des espaces d'activité.",
    "experience.openhouse.title": "Bénévole, journées portes ouvertes scolaires",
    "experience.openhouse.org": "Plusieurs journées portes ouvertes scolaires",
    "experience.openhouse.point1": "Accueil des visiteurs avec courtoisie et professionnalisme.",
    "experience.openhouse.point2":
        "Réponses aux questions et orientation des visiteurs et des véhicules.",
    "experience.openhouse.point3":
        "Collaboration avec les autres bénévoles pour assurer le bon déroulement des événements.",
    "experience.cta.text": "Envie d'en savoir plus ? Contactez-moi et je vous enverrai mon CV.",
    "experience.cta.button": "Me contacter",
    "experience.language.french": "Français (courant)",
    "experience.language.english": "Anglais (courant)",
    "experience.language.italian": "Italien (courant)",
    "experience.language.spanish": "Espagnol (notions)",

    // Projects
    "projects.metaDescription":
        "Projets logiciels réalisés par Davide Cipolla, avec leurs descriptions, les technologies utilisées et des liens vers le code source.",
    "projects.heading": "Projets",
    "projects.loading": "Chargement des projets...",
    "projects.error": "Impossible de charger les projets. Veuillez réessayer plus tard.",
    "projects.emptyTitle": "Aucun projet trouvé",
    "projects.emptyText":
        "Il n'y a pas encore de projets ici. Revenez bientôt !",
    "projects.noMatch": "Aucun projet trouvé pour cette technologie.",
    "projects.noDescription": "Aucune description pour le moment.",
    "projects.all": "Tous",
    "projects.filterLabel": "Filtrer les projets par technologie",
    "projects.techLabel": "Technologies utilisées",
    "projects.featured": "En vedette",
    "projects.imageAlt": "Logo de {title}",
    "projects.github": "GitHub",
    "projects.demo": "Démo en ligne",

    // Contact
    "contact.metaDescription":
        "Contactez Davide Cipolla par courriel, GitHub ou LinkedIn.",
    "contact.heading": "Contact",
    "contact.description": "Intéressé à collaborer ? N'hésitez pas à m'écrire.",
    "contact.email": "Courriel",
    "contact.sendMessage": "Envoyer un message",
    "contact.github": "GitHub",
    "contact.viewProjects": "Voir les projets",
    "contact.linkedin": "LinkedIn",
    "contact.connect": "Se connecter",

    // Errors
    "notFound.title": "Introuvable",
    "notFound.heading": "Page introuvable",
    "notFound.text":
        "Désolé, la page que vous cherchez n'existe pas ou a peut-être été déplacée.",
    "error.heading": "Oups ! Une erreur est survenue.",
    "error.unexpected": "Une erreur inattendue s'est produite."
};
