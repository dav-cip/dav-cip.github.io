import { describe, expect, it } from "vitest";
import { isTheme, resolveInitialTheme } from "./theme";

describe("resolveInitialTheme", () => {
    it("prefers a saved choice over the system preference", () => {
        expect(resolveInitialTheme("light", true)).toBe("light");
        expect(resolveInitialTheme("dark", false)).toBe("dark");
    });

    it("follows the system preference when nothing is saved", () => {
        expect(resolveInitialTheme(null, true)).toBe("dark");
        expect(resolveInitialTheme(undefined, false)).toBe("light");
    });

    it("ignores invalid saved values", () => {
        expect(resolveInitialTheme("blue", true)).toBe("dark");
        expect(resolveInitialTheme("", false)).toBe("light");
    });
});

describe("isTheme", () => {
    it("accepts only light and dark", () => {
        expect(isTheme("light")).toBe(true);
        expect(isTheme("dark")).toBe(true);
        expect(isTheme("auto")).toBe(false);
    });
});
