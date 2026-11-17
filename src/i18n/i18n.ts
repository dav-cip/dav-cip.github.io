import { en, fr, type TranslationKey, type Translations } from "./translations";

export type Language = "en" | "fr";

export const LANGUAGE_STORAGE_KEY = "lang";

const dictionaries: Record<Language, Translations> = { en, fr };

export function isLanguage(value: unknown): value is Language {
    return value === "en" || value === "fr";
}

/**
 * Picks the starting language: a saved choice wins, otherwise the
 * browser's language (French if it starts with "fr"), otherwise English.
 */
export function resolveInitialLanguage(
    stored: string | null | undefined,
    browserLanguage: string | null | undefined
): Language {
    if (isLanguage(stored)) return stored;
    return browserLanguage?.toLowerCase().startsWith("fr") ? "fr" : "en";
}

/** Looks up a key and fills in {placeholders}. Falls back to English. */
export function translate(
    lang: Language,
    key: TranslationKey,
    vars?: Record<string, string | number>
): string {
    const template = dictionaries[lang][key] ?? en[key] ?? key;

    if (!vars) return template;

    return template.replace(/\{(\w+)\}/g, (match, name: string) =>
        name in vars ? String(vars[name]) : match
    );
}
