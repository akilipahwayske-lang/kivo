import { useState, useEffect } from "react";

type Theme = "light" | "dark";

export const useTheme = () => {
    const [theme, setTheme] = useState<Theme>(() => {
        // Check localStorage or system preference, default to dark for KIVO Elite aesthetic
        const savedTheme = localStorage.getItem("kivo-theme") as Theme;
        if (savedTheme) return savedTheme;

        return "dark";
    });

    useEffect(() => {
        const root = window.document.documentElement;

        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }

        localStorage.setItem("kivo-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return { theme, toggleTheme };
};
