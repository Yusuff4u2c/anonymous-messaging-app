import { createContext, useState } from "react";

export const AuthContext = createContext({
  user: null,
  getUser: () => {},
  updateUser: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

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
