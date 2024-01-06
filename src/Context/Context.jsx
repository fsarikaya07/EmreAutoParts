import { createContext, useContext, useEffect, useState } from "react";

const AutoContext = createContext();

export function useAutoContext() {
  return useContext(AutoContext);
}

export function AutoProvider({ children }) {
  const [lang, setLang] = useState("de");
  const [seat, setSeat] = useState("sessel");
  const [acc, setAcc] = useState("zubehörteil");
  const [spare, setSpare] = useState("yedekParca");
  const [aboutUs, setAboutUs] = useState("hakkımızda");
  const [contact, setContact] = useState("iletişim");



  useEffect(() => {
    const langPathFun = () => {
      if (lang === "de") {
        setSeat("sessel");
        setAcc("zubehörteil");
        setSpare("yedekParca");
        setAboutUs("hakkımızda");
        setContact("iletişim");
      } else if (lang === "tr") {
        setSeat("koltuk");
        setAcc("aksesuar");
        setSpare("yedekParca");
        setAboutUs("hakkımızda");
        setContact("iletişim");
      }
    };
    langPathFun();
  }, [lang]); // langPathFun'u bağımlılıklar arasına ekleyin

  const contextValue = {
    lang,
    seat,
    aboutUs,
    contact,
    acc,
    spare,
    setLang,
  };

  return (
    <AutoContext.Provider value={contextValue}>{children}</AutoContext.Provider>
  );
}
