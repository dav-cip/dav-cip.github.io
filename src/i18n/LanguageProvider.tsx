import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { LanguageContext } from "./LanguageContext";
import {
    LANGUAGE_STORAGE_KEY,
    resolveInitialLanguage,
    translate,
    type Language
} from "./i18n";
import type { TranslationKey } from "./translations";

function readStoredLanguage(): string | null {
    try {
        return localStorage.getItem(LANGUAGE_STORAGE_KEY);
    } catch {
        return null;
    }
}

function saveLanguage(lang: Language) {
    try {
        localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    } catch {
        // Storage can be unavailable (private mode); the choice just won't persist.
    }
}

export default function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLangState] = useState<Language>(() =>
        resolveInitialLanguage(readStoredLanguage(), navigator.language)
    );

    // Keep <html lang> in sync for screen readers and search engines.
    useEffect(() => {
        document.documentElement.lang = lang;
    }, [lang]);

    const setLang = useCallback((next: Language) => {
        setLangState(next);
        saveLanguage(next);
    }, []);

    const toggleLang = useCallback(() => {
        setLang(lang === "en" ? "fr" : "en");
    }, [lang, setLang]);

    const t = useCallback(
        (key: TranslationKey, vars?: Record<string, string | number>) =>
            translate(lang, key, vars),
        [lang]
    );

    const value = useMemo(
        () => ({ lang, setLang, toggleLang, t }),
        [lang, setLang, toggleLang, t]
    );

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}
