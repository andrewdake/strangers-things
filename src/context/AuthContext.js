import React, { useState, useEffect } from "react";
import { STRANGERS_THINGS_LOCAL_STORAGE_TOKEN_KEY } from "../../constants";

export const AuthContext = React.createContext();

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [shouldCheckStatus, checkStatus] = useState(false);

  useEffect(() => {
    setToken(localStorage.getItem(STRANGERS_THINGS_LOCAL_STORAGE_TOKEN_KEY));
  }, [shouldCheckStatus]);

  const updateAuthStatus = () => checkStatus(!shouldCheckStatus);

  const providerValue = {
    isLoggedIn: !!token,
    token,
    updateAuthStatus,
  };

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
}
