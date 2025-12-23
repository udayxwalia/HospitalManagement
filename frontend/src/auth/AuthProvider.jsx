import React, { createContext, useEffect, useState } from "react";
import api from "../api/axios";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
  const [accessToken, setAccessToken] = useState(localStorage.getItem("accessToken") || "");
  const [refreshToken, setRefreshToken] = useState(localStorage.getItem("refreshToken") || "");

  useEffect(() => {
    if (accessToken) {
      localStorage.setItem("accessToken", accessToken);
      api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    } else {
      localStorage.removeItem("accessToken");
      delete api.defaults.headers.common["Authorization"];
    }
    if (refreshToken) localStorage.setItem("refreshToken", refreshToken);
    else localStorage.removeItem("refreshToken");

    if (user) localStorage.setItem("user", JSON.stringify(user));
    else localStorage.removeItem("user");
  }, [accessToken, refreshToken, user]);

  const handleLogin = ({ accessToken: at, refreshToken: rt, user: u }) => {
    setAccessToken(at);
    setRefreshToken(rt);
    setUser(u);
  };

  const logout = async () => {
    try {
      await api.post("/auth/logout", { refreshToken });
    } catch (e) {}
    setAccessToken("");
    setRefreshToken("");
    setUser(null);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  const refreshAccessToken = async () => {
    try {
      const r = await api.post("/auth/refresh", { refreshToken });
      setAccessToken(r.data.accessToken);
      return r.data.accessToken;
    } catch (e) {
      logout();
      throw e;
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, accessToken, refreshToken, handleLogin, logout, refreshAccessToken }}>
      {children}
    </AuthContext.Provider>
  );
}
