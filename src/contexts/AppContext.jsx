import { createContext, useState } from "react";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [regIsCompleted, setRegIsCompleted] = useState(false);

  return (
    <AppContext.Provider value={{ setIsHovered, setRegIsCompleted }}>
      {children}
    </AppContext.Provider>
  );
};
