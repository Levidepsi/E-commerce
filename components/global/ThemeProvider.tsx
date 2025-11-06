"use client";

import { createContext, useContext, useState, SetStateAction } from "react";

interface IThemeContext {
  initialLoaded: boolean;
  setInitialLoaded: React.Dispatch<SetStateAction<boolean>>;
}

const defaultState: IThemeContext = {
  initialLoaded: false,
  setInitialLoaded: () => {},
};

const ThemeContext = createContext<IThemeContext>(defaultState);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [initialLoaded, setInitialLoaded] = useState(false);

  return (
    <ThemeContext.Provider
      value={{
        initialLoaded,
        setInitialLoaded,
      }}
    >
      <div className="min-h-[100vh] flex flex-col relative justify-between"> {children} </div>
    </ThemeContext.Provider>
  );
};

// ✅ Global hook
export const GlobalContext = () => useContext(ThemeContext);
