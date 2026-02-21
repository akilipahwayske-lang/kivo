import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/use-theme";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="relative w-12 h-6 rounded-full bg-white/5 border border-white/10 flex items-center p-1 hover:border-primary/50 transition-all group overflow-hidden"
            aria-label="Toggle Theme"
        >
            <motion.div
                animate={{
                    x: theme === "dark" ? 22 : 0,
                }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="relative z-10 w-4 h-4 bg-primary rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(0,240,255,0.4)]"
            >
                {theme === "dark" ? (
                    <Moon size={10} className="text-[#050505]" />
                ) : (
                    <Sun size={10} className="text-[#050505]" />
                )}
            </motion.div>

            <div className="absolute inset-0 flex justify-between px-1.5 items-center opacity-20">
                <Sun size={10} className="text-white" />
                <Moon size={10} className="text-white" />
            </div>

            {/* Holographic Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-r from-primary via-transparent to-secondary blur-sm" />
        </button>
    );
};

export default ThemeToggle;
