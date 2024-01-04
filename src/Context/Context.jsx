import { createContext, useContext, useState } from "react";

const AutoContext = createContext();

export function useAutoContext() {
  return useContext(AutoContext);
}

export function AutoProvider({ children }) {
  const [lang, setLang] = useState("tr");

  const contextValue = {
    lang,
    setLang,
  };

  return (
    <AutoContext.Provider value={contextValue}>{children}</AutoContext.Provider>
  );
}
