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
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  theme: React.Dispatch<React.SetStateAction<Theme>>;
}

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

const ThemeContext = React.createContext<ThemeContextProps>({} as ThemeContextProps);;

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

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