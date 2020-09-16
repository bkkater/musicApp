import React, { createContext, useState, useContext } from "react";

const ThemeContext = React.createContext({});

export const themes = {
  light: {
    colors: {
      backgroundPrimary: "#C9D6FF",
      backgroundSecondary: "transparent",
      text: "black",
      icon: "#343434"
    }
  },
  dark: {
    colors: {
      backgroundPrimary: "#2F2E30",
      backgroundSecondary: "575757",
      text: "white",
      icon: "white"
    }
  }
};

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(themes.light);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  const { theme, setTheme } = context;
  return { theme, setTheme };
}