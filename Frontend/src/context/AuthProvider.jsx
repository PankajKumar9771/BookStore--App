import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const intialAuthUser = localStorage.getItem("Users");
  const [authUser, setAuthUser] = useState(
    intialAuthUser ? JSON.parse(intialAuthUser) : undefined
  );
  return (
    <>
      <AuthContext.Provider value={[authUser, setAuthUser]}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
export const useAuth = () => useContext(AuthContext);