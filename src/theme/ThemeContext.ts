import { createContext, useContext } from "react";
import type { Theme } from "./theme";

export interface ThemeContextValue {
    theme: Theme;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextValue>({
    theme: "light",
    toggleTheme: () => {}
});

export function useTheme(): ThemeContextValue {
    return useContext(ThemeContext);
}
