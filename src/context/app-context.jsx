import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const AppContextWrapper = ({ children }) => {
  const [modal, setModal] = useState("");
  const [singleData, setSingleData] = useState({});

  const sharedState = {
    modal,
    setModal,
    singleData,
    setSingleData,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
};

export function useAppContext() {
  return useContext(AppContext);
}
