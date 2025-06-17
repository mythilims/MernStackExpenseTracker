import { useState, useEffect } from "react";

import AuthContext from "./AuthContext";

function AuthProvider({ children }) {
  const [token, setToken] = useState("");
  const [userDetails, setUserDetails] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("userDetails");

    if (storedToken) setToken(storedToken);
    if (storedUser) setUserDetails(JSON.parse(storedUser));
  }, []);
  const login = (token, userDetails) => {
    setToken(token);
    setUserDetails(JSON.parse(userDetails));
  };
  return (
    <>
      <AuthContext.Provider value={{ token, userDetails, login }}>
        {children}
      </AuthContext.Provider>
    </>
  );
}

export default AuthProvider;
