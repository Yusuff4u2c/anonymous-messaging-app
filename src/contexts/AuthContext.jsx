import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({
  user: null,
  getUser: () => {},
  updateUser: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const persistedUser = window.localStorage.getItem("user");
    if (persistedUser) {
      setUser(JSON.parse(persistedUser));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        getUser: () => user,
        updateUser: (_user) => setUser(_user),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
