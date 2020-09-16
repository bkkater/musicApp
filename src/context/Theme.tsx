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

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(themes.dark);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  return context;
}