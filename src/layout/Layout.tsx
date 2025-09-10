import { ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";

// -----------------------------
// Definisi tipe props untuk Layout
// -----------------------------
// children: komponen apapun yang dimasukkan di dalam <Layout>...</Layout>
type LayoutProps = {
  children: ReactNode;
};

// -----------------------------
// Layout Component
// -----------------------------
// Layout dipakai sebagai "kerangka" aplikasi.
// Bagian ini akan membungkus halaman dengan navbar + konten utama.
// Jadi semua halaman yang menggunakan Layout otomatis punya navbar.
const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      {/* Navigation bar */}
      <nav>
        {/* Link biasa ke halaman Home */}
        <Link to="/">Home</Link> |{" "}
        
        {/* NavLink = mirip Link tapi bisa kasih style ketika aktif */}
        <NavLink
          to="/about"
          // className pakai function untuk deteksi route aktif
          className={({ isActive }) => (isActive ? "text-blue-600" : "")}
        >
          About
        </NavLink>{" "}
        |{" "}
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "text-blue-600" : "")}
        >
          Contact
        </NavLink>
      </nav>

      {/* Main content */}
      {/* children = halaman spesifik yang dirender di dalam Layout */}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
