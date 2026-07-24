"use client";

import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export function useAuth() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const decoded = jwtDecode(token);
      setUser(decoded);
    } catch (err) {
      console.error("Invalid token");
    } finally {
      setLoading(false);
    }
  }, []);

  return { user, loading };
}