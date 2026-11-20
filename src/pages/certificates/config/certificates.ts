/**
 * Certificates shown on the Certificates page.
 *
 * Add an entry to the array to show a new certificate. Names and issuers are
 * proper nouns, so they stay as plain text (not translated). Newest first is
 * recommended, but the page sorts by `date` anyway.
 */
export interface Certificate {
    name: string;
    issuer: string;
    /** Issue date as "YYYY-MM" or "YYYY-MM-DD". */
    date: string;
    description?: string;
    descriptionFr?: string; // optional French description
    /** Link to the credential or a verification page. */
    url?: string;
    /** Optional file name in public/images/, e.g. "my-certificate.png". */
    image?: string;
    skills?: string[];
}

export const certificates: Certificate[] = [
    {
        name: "JavaScript Certification", // check the exact title on the certificate page
        issuer: "freeCodeCamp",
        date: "2026-MM", // replace with the issue date, e.g. "2026-05"
        description: "Covers JavaScript fundamentals, including functions, arrays, objects, DOM manipulation, and algorithmic problem-solving.", // check this matches the curriculum
        descriptionFr: "Couvre les fondements de JavaScript : fonctions, tableaux, objets, manipulation du DOM et résolution de problèmes algorithmiques.",
        url: "https://www.freecodecamp.org/certification/cipollino/javascript-v9",
        image: "certificate_freecodecamp.org_javascript.png",
        skills: ["JavaScript"],
    },
];