import { createContext, useState } from "react";

export const globalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isHovered, setIsHovered] = useState(null);

  return (
    <globalContext.Provider value={{ isHovered, setIsHovered }}>
      {children}
    </globalContext.Provider>
  );
};
