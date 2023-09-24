import { createContext, useState } from "react";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <AppContext.Provider value={{ setIsHovered }}>
      {children}
    </AppContext.Provider>
  );
};
