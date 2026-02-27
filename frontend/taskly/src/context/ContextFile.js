import React, { createContext, useState, useContext } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [firstName, setFirstName] = useState(localStorage.getItem("firstname"));
  const [lastName, setLastName] = useState(
    localStorage.getItem("lastname") || ""
  );
  const [userName, setUserName] = useState(
    localStorage.getItem("username") || ""
  );
  const [password, setPassword] = useState("");

  const value = {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    userName,
    setUserName,
    password,
    setPassword,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
