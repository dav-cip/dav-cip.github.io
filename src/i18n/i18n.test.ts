import { describe, expect, it } from "vitest";
import { isLanguage, resolveInitialLanguage, translate } from "./i18n";
import { en, fr, type TranslationKey } from "./translations";

const keys = Object.keys(en) as TranslationKey[];
const placeholders = (text: string) => (text.match(/\{\w+\}/g) ?? []).sort();

describe("translations", () => {
    it("have exactly the same keys in English and French", () => {
        expect(Object.keys(fr).sort()).toEqual(Object.keys(en).sort());
    });

    it("have no empty strings", () => {
        for (const key of keys) {
            expect(en[key].trim(), `en: ${key}`).not.toBe("");
            expect(fr[key].trim(), `fr: ${key}`).not.toBe("");
        }
    });

    it("use the same {placeholders} in both languages", () => {
        for (const key of keys) {
            expect(placeholders(fr[key]), key).toEqual(placeholders(en[key]));
        }
    });
});

describe("translate", () => {
    it("returns the text for the chosen language", () => {
        expect(translate("en", "nav.home")).toBe("Home");
        expect(translate("fr", "nav.home")).toBe("Accueil");
    });

    it("fills in placeholders", () => {
        expect(translate("en", "projects.imageAlt", { title: "my-app" })).toBe("my-app logo");
        expect(translate("fr", "projects.imageAlt", { title: "my-app" })).toBe("Logo de my-app");
    });

    it("leaves a placeholder untouched when no value is given", () => {
        expect(translate("en", "projects.imageAlt", {})).toBe("{title} logo");
    });
});

describe("resolveInitialLanguage", () => {
    it("prefers a saved choice over the browser language", () => {
        expect(resolveInitialLanguage("en", "fr-CA")).toBe("en");
        expect(resolveInitialLanguage("fr", "en-US")).toBe("fr");
    });

    it("uses French when the browser language is French", () => {
        expect(resolveInitialLanguage(null, "fr-CA")).toBe("fr");
        expect(resolveInitialLanguage(undefined, "FR")).toBe("fr");
    });

    it("falls back to English for other languages or invalid saved values", () => {
        expect(resolveInitialLanguage(null, "it-IT")).toBe("en");
        expect(resolveInitialLanguage("de", "en-US")).toBe("en");
        expect(resolveInitialLanguage(null, undefined)).toBe("en");
    });
});

describe("isLanguage", () => {
    it("accepts only supported languages", () => {
        expect(isLanguage("en")).toBe(true);
        expect(isLanguage("fr")).toBe(true);
        expect(isLanguage("es")).toBe(false);
        expect(isLanguage(null)).toBe(false);
    });
});
