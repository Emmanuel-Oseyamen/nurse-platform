"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import {
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  UserCheck,
  Eye,
  EyeOff,
} from "lucide-react";

import { api } from "@/lib/api";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  async function handleLogin() {
    setError("");

    if (!email || !password) {
      return setError("Please enter your email and password.");
    }

    try {
      setLoading(true);

      const res = await api.post("/auth/login", {
        email,
        password,
      });

      const token = res.data.accessToken;

      localStorage.setItem("token", token);

      const decoded: any = jwtDecode(token);

      console.log(decoded);

      router.push("/dashboard");
    } catch (err: any) {
      setError(
        err?.response?.data?.message ??
          "Invalid email or password."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2">

      {/* LEFT */}

      <div className="hidden lg:flex bg-gradient-to-br from-emerald-700 to-emerald-500 text-white p-16 flex-col justify-between">

        <div>

          <div className="flex items-center gap-3">

            <HeartPulse size={42} />

            <div>

              <h1 className="text-4xl font-bold">
                Nepox
              </h1>

              <p className="opacity-90">
                Trusted Health Guidance
              </p>

            </div>

          </div>

          <h2 className="text-5xl font-bold mt-20 leading-tight">
            Welcome back.
          </h2>

          <p className="text-xl mt-8 opacity-90 leading-relaxed">
            Continue asking health questions,
            reading daily health tips,
            and connecting with verified nurses.
          </p>

        </div>

        <div className="space-y-6 text-lg">

          <div className="flex items-center gap-4">
            <ShieldCheck />
            Confidential health discussions
          </div>

          <div className="flex items-center gap-4">
            <Stethoscope />
            Professional nurse guidance
          </div>

          <div className="flex items-center gap-4">
            <UserCheck />
            Trusted by thousands of users
          </div>

        </div>

      </div>

      {/* RIGHT */}

      <div className="flex justify-center items-center bg-slate-50 px-8 py-10">

        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border p-10">

          <h2 className="text-3xl font-bold">
            Welcome Back
          </h2>

          <p className="text-gray-500 mt-2 mb-8">
            Sign in to continue.
          </p>

          {error && (
            <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-3 text-red-600">
              {error}
            </div>
          )}

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full border rounded-xl p-3 mb-4"
          />

          <div className="relative">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="w-full border rounded-xl p-3 pr-12"
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="absolute right-4 top-4 text-gray-500"
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>

          </div>

          <div className="flex justify-between items-center mt-4">

            <label className="flex items-center gap-2 text-sm text-gray-600">

              <input type="checkbox" />

              Remember me

            </label>

            <button
              className="text-sm text-emerald-600 hover:underline"
            >
              Forgot Password?
            </button>

          </div>

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full mt-8 rounded-xl bg-emerald-600 py-3 text-white font-semibold hover:bg-emerald-700 transition disabled:opacity-60"
          >
            {loading
              ? "Signing In..."
              : "Sign In"}
          </button>

          <div className="mt-8 text-center text-gray-500">

            Don't have an account?{" "}

            <Link
              href="/register"
              className="font-semibold text-emerald-600 hover:underline"
            >
              Create one
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}