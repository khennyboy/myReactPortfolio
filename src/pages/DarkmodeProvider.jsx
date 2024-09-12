import { createContext, useEffect, useRef } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const DarkModeContext = createContext();

function DarkModeProvider(info) {
  const { children } = info;
  const ref = useRef();

  const [IsDark, setMode] = useLocalStorage();

  useEffect(
    function () {
      if (IsDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
    [IsDark],
  );

  function toggleDarkMode() {
    setMode((isDark) => !isDark);
    localStorage.setItem("DARk_LIGHT_MODE", !IsDark);
  }

  return (
    <DarkModeContext.Provider value={{ IsDark, toggleDarkMode, ref }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export default DarkModeProvider;
