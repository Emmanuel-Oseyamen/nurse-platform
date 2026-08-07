"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Eye,
  EyeOff,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  UserCheck,
} from "lucide-react";

import { api } from "@/lib/api";

export default function RegisterPage() {
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  async function handleRegister() {
    setError("");

    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      return setError("Please complete all fields.");
    }

    if (password.length < 8) {
      return setError("Password must be at least 8 characters.");
    }

    if (password !== confirmPassword) {
      return setError("Passwords do not match.");
    }

    try {
      setLoading(true);

      const res = await api.post("/auth/register", {
        firstName,
        lastName,
        email,
        password,
      });

      // Save the authentication token
      const token = res.data?.accessToken;

      if (!token) {
        throw new Error( 
          "Registration succeeded but no authentication token was returned." 
        ); 
      }
      localStorage.setItem("token", token);

      // User is now authenticated — go directly to dashboard
      router.push("/dashboard");
    } catch (err: any) {
      setError(
        err?.response?.data?.message ??
          err?.message ??
          "Registration failed."
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

              <p className="opacity-80">
                Trusted Health Guidance
              </p>

            </div>

          </div>

          <h2 className="text-5xl font-bold mt-20 leading-tight">
            Professional health advice from verified nurses.
          </h2>

          <p className="mt-8 text-xl opacity-90">
            Join thousands of patients receiving trusted
            health information every day.
          </p>

        </div>

        <div className="space-y-6 text-lg">

          <div className="flex items-center gap-4">
            <ShieldCheck />
            Private consultations
          </div>

          <div className="flex items-center gap-4">
            <Stethoscope />
            Verified healthcare professionals
          </div>

          <div className="flex items-center gap-4">
            <UserCheck />
            Daily health education
          </div>

        </div>

      </div>

      {/* RIGHT */}

      <div className="flex justify-center items-center bg-slate-50 px-8 py-10">

        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-10 border">

          <h2 className="text-3xl font-bold">
            Create Account
          </h2>

          <p className="text-gray-500 mt-2 mb-8">
            Start asking trusted healthcare questions.
          </p>

          {error && (
            <div className="mb-6 bg-red-50 text-red-600 border border-red-200 rounded-xl p-3">
              {error}
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">

            <input
              placeholder="First Name"
              className="border rounded-xl p-3"
              value={firstName}
              onChange={(e) =>
                setFirstName(e.target.value)
              }
            />

            <input
              placeholder="Last Name"
              className="border rounded-xl p-3"
              value={lastName}
              onChange={(e) =>
                setLastName(e.target.value)
              }
            />

          </div>

          <input
            placeholder="Email Address"
            type="email"
            className="border rounded-xl p-3 mt-4 w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="relative mt-4">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="border rounded-xl p-3 w-full pr-12"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="absolute right-4 top-4"
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>

          </div>

          <div className="relative mt-4">

            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm Password"
              className="border rounded-xl p-3 w-full pr-12"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirm(!showConfirm)
              }
              className="absolute right-4 top-4"
            >
              {showConfirm ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>

          </div>

          <div className="mt-6 text-sm text-gray-500">

            By creating an account you agree to our
            <span className="text-emerald-600 cursor-pointer">
              {" "}
              Terms
            </span>{" "}
            and{" "}
            <span className="text-emerald-600 cursor-pointer">
              Privacy Policy
            </span>

          </div>

          <button
            onClick={handleRegister}
            disabled={loading}
            className="mt-8 w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl py-3 font-semibold transition"
          >
            {loading
              ? "Creating Account..."
              : "Create Account"}
          </button>

          <p className="mt-8 text-center text-gray-500">

            Already have an account?{" "}

            <Link
              href="/login"
              className="text-emerald-600 font-semibold"
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}