// hooks/useAuth.tsx
"use client";
import { useEffect, useState } from "react";

export function useAuth() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const raw = localStorage.getItem("ice_user");
    if (!raw) return;
    try {
      setUser(JSON.parse(raw));
    } catch {
      localStorage.removeItem("ice_user");
    }
  }, []);

  function logout() {
    localStorage.removeItem("ice_user");
    setUser(null);
  }

  return { user, logout };
}
