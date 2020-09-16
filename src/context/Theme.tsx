import React, { createContext, useState, useContext } from "react";

interface Theme {
  light: {
    colors: {
      backgroundPrimary: string
      backgroundSecondary: string
      text: string,
      icon: string
    }
  },
  dark: {
    colors: {
      backgroundPrimary: string
      backgroundSecondary: string
      text: string,
      icon: string
    }
  }
}

interface ThemeContextProps {
  setTheme: Theme;
  theme: Theme;
}

const ThemeContext = React.createContext<ThemeContextProps>({} as ThemeContextProps);;

export const themes: Theme = {
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