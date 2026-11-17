export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "theme";

export function isTheme(value: unknown): value is Theme {
    return value === "light" || value === "dark";
}

/**
 * Picks the starting theme: a saved choice wins, otherwise the
 * operating system's preference.
 */
export function resolveInitialTheme(
    stored: string | null | undefined,
    systemPrefersDark: boolean
): Theme {
    if (isTheme(stored)) return stored;
    return systemPrefersDark ? "dark" : "light";
}

export const THEME_COLORS: Record<Theme, string> = {
    light: "#F9FAFB",
    dark: "#0B1220"
};
