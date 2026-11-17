import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { ThemeContext } from "./ThemeContext";
import {
    THEME_COLORS,
    THEME_STORAGE_KEY,
    resolveInitialTheme,
    type Theme
} from "./theme";

function readStoredTheme(): string | null {
    try {
        return localStorage.getItem(THEME_STORAGE_KEY);
    } catch {
        return null;
    }
}

export default function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>(() =>
        resolveInitialTheme(
            readStoredTheme(),
            window.matchMedia("(prefers-color-scheme: dark)").matches
        )
    );

    // Apply the theme to the page (CSS reads data-theme on <html>).
    useEffect(() => {
        document.documentElement.dataset.theme = theme;

        document
            .querySelector('meta[name="theme-color"]')
            ?.setAttribute("content", THEME_COLORS[theme]);
    }, [theme]);

    const toggleTheme = useCallback(() => {
        const next: Theme = theme === "dark" ? "light" : "dark";
        setTheme(next);

        try {
            localStorage.setItem(THEME_STORAGE_KEY, next);
        } catch {
            // Storage can be unavailable; the choice just won't persist.
        }
    }, [theme]);

    const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}
