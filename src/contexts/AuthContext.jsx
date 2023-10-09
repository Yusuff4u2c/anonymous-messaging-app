import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({
  user: null,
  signUserIntoApp: () => {},
  signUserOutOfApp: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  const signUserIntoApp = (user) => {
    setUser(user);
    window.localStorage.setItem("user", JSON.stringify(user));
  };

  const signUserOutOfApp = () => {
    setUser(null);
    window.localStorage.removeItem("user");
  };

  useEffect(() => {
    const persistedUser = window.localStorage.getItem("user");
    if (persistedUser) {
      setUser(JSON.parse(persistedUser));
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signUserOutOfApp,
        signUserIntoApp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
