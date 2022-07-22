import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export const AuthContext = React.createContext({
  userId: "",
  isLoggedin: false,
  onLogin: (userId) => {},
  onLogout: () => {},
});

export function AuthContextProvider(props) {
  const [userLoggedIn, setUserLoggedIn] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();

  const loginHandler = (userId) => {
    localStorage.setItem("USER_LOGIN", userId);
    setIsLoggedIn(true);
    setUserLoggedIn(userId);
    history.push("/home");
  };

  const logoutHandler = () => {
    localStorage.removeItem("USER_LOGIN");
    setUserLoggedIn("");
    setIsLoggedIn(false);
    history.replace("/login");
  };

  useEffect(() => {
    const userIdFromLocalStorage = localStorage.getItem("USER_LOGIN");

    if (userIdFromLocalStorage) {
      setIsLoggedIn(true);
      setUserLoggedIn(userIdFromLocalStorage);
    }
  }, [isLoggedIn, userLoggedIn]);

  return (
    <AuthContext.Provider
      value={{
        userId: userLoggedIn,
        isLoggedin: isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
