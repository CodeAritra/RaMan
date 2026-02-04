"use client";

import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const router = useRouter()

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const localtoken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (localtoken && storedUser) {
      setIsLoggedIn(true);
      setToken(localtoken)
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (data) => {
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    setIsLoggedIn(true);
    setUser(data.user);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUser(null);
    router.refresh()
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout ,token}}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
