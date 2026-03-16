import React, { createContext, useState, useContext } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState({
    firstName: localStorage.getItem("firstname") || "",
    lastName: localStorage.getItem("lastname") || "",
    workspaceId: localStorage.getItem("workspaceId") || "",
  });

  const logout = () => {
    localStorage.clear();
    setUser({ firstName: "", lastName: "", workspaceId: "" });
    window.location.href = "/";
  };

  const updateUserInfo = (newData) => {
    setUser((prev) => ({ ...prev, ...newData }));
  };

  const value = {
    ...user,
    updateUserInfo,
    logout,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
