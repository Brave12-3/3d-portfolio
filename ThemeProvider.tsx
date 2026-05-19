// app/providers/ThemeProvider.tsx
"use client";
import React, { createContext, useState, useEffect, ReactNode } from "react";

// Define the shape of your context
interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

// Create a default value for the context
const defaultContextValue: ThemeContextType = {
  theme: "light",
  toggleTheme: () => {},
};

// Create the context
export const ThemeContext = createContext<ThemeContextType>(defaultContextValue);

// The provider component
const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Load theme from localStorage on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark";
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Sync theme with localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.className = theme === "dark" ? "dark" : "";
  }, [theme]);

  // Toggle function
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;