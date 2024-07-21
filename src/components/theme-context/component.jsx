import React, { useContext } from "react";
import { useCallback } from "react";
import { useState } from "react";

const ThemeContext = React.createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("default");

  const toggleTheme = useCallback(
    () => setTheme((prevState) => (prevState === "default" ? "custom" : "default")),
    []
  );

  return (
    <ThemeContext.Provider value={{ value: theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};