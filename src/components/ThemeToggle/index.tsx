"use client";

import { IconSun, IconMoon } from "@tabler/icons-react";
import { useTheme } from "@/lib/hooks/useTheme";
import styles from "./ThemeToggle.module.css";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      className={styles.toggle}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <IconMoon size={18} stroke={1.5} />
      ) : (
        <IconSun size={18} stroke={1.5} />
      )}
    </button>
  );
}
