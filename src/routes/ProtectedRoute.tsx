/** @format */

import { Navigate, Outlet } from "react-router-dom";

// -----------------------------
// Tipe props untuk ProtectedRoute
// -----------------------------
// - isAuthenticated: status autentikasi user (true/false)
// - redirectPath: path tujuan jika user tidak terautentikasi (default: "/login")
interface ProtectedRouteProps {
  isAuthenticated: boolean;
  redirectPath?: string;
}

// -----------------------------
// ProtectedRoute Component
// -----------------------------
// Fungsinya untuk melindungi halaman tertentu agar hanya bisa diakses
// oleh user yang sudah login (isAuthenticated = true).
//
// Jika user belum login → redirect ke halaman login.
// Jika user sudah login → render halaman anak (Outlet).
const ProtectedRoute = ({
  isAuthenticated,
  redirectPath = "/login", // default redirect ke "/login"
}: ProtectedRouteProps) => {
  // Jika user tidak terautentikasi, arahkan ke halaman login
  if (!isAuthenticated) {
    return <Navigate replace to={redirectPath} />;
  }

  // Jika user terautentikasi, render Outlet (halaman child di route)
  return <Outlet />;
};

export default ProtectedRoute;
