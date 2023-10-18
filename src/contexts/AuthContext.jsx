import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { firebaseAuth } from "../libs/firebase";

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

  // useEffect(() => {
  //   const persistedUser = window.localStorage.getItem("user");
  //   if (persistedUser) {
  //     setUser(JSON.parse(persistedUser));
  //   }
  // }, []);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      console.log("auth changed", user.email);
      if (user) signUserIntoApp(user);
      else signUserOutOfApp;
    });
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
