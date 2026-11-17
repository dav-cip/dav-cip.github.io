import { createContext, useContext } from "react";
import { translate, type Language } from "./i18n";
import type { TranslationKey } from "./translations";

export interface LanguageContextValue {
    lang: Language;
    setLang: (lang: Language) => void;
    toggleLang: () => void;
    t: (key: TranslationKey, vars?: Record<string, string | number>) => string;
}

// Default (no provider): English, so components still render.
export const LanguageContext = createContext<LanguageContextValue>({
    lang: "en",
    setLang: () => {},
    toggleLang: () => {},
    t: (key, vars) => translate("en", key, vars)
});

export function useLanguage(): LanguageContextValue {
    return useContext(LanguageContext);
}
