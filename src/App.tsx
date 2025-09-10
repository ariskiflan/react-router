// 📌 Ringkasannya:
// createBrowserRouter → untuk mendefinisikan daftar route dalam bentuk array.
// Layout → membungkus halaman agar semua punya UI konsisten (misal header/footer).
// children → nested route (contoh /about/team).
// ProtectedRoute → custom component untuk proteksi halaman (auth).
// loader → untuk fetch data sebelum halaman dirender.
// errorElement → UI fallback kalau loader error.
// RouterProvider → penyedia router utama ke seluruh aplikasi.



import Layout from "./layout/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import {
  RouterProvider,
  createBrowserRouter,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Product from "./pages/Product";
import Team from "./pages/Team";
import Users from "./pages/Users";
import ErrorUser from "./pages/ErrorUser";
import ProtectedRoute from "./routes/ProtectedRoute";

// -----------------------------
// Konfigurasi routing menggunakan createBrowserRouter
// -----------------------------
const router = createBrowserRouter([
  {
    // route utama "/"
    path: "/",
    // setiap route dibungkus Layout agar semua halaman punya struktur layout yang sama
    element: (
      <Layout>
        <Home /> {/* konten utama untuk halaman Home */}
      </Layout>
    ),
  },
  {
    // route "/about"
    path: "/about",
    element: (
      <Layout>
        <About /> {/* konten utama untuk halaman About */}
      </Layout>
    ),
    // nested route di dalam About
    children: [
      {
        path: "team", // route menjadi "/about/team"
        element: <Team />,
      },
    ],
  },
  {
    // route "/contact"
    path: "/contact",
    element: (
      <Layout>
        <Contact /> {/* konten utama untuk halaman Contact */}
      </Layout>
    ),
  },
  {
    // route "/product/:productId" dengan parameter dinamis
    path: "/product/:productId",
    // dilindungi oleh ProtectedRoute (hanya bisa diakses kalau isAuthenticated = true)
    element: <ProtectedRoute isAuthenticated={false} />,
    children: [
      {
        // jika lolos proteksi, render halaman Product
        path: "",
        element: <Product />,
      },
    ],
  },
  {
    // route "/users" yang menggunakan loader
    path: "/users",
    element: <Users />, // halaman Users
    loader: async () => {
      // loader = function untuk fetch data sebelum halaman dirender
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) throw new Error("Gagal memuat data");
      return response.json();
    },
    errorElement: <ErrorUser />, // fallback UI jika loader gagal
  },
  {
    // route "/login"
    path: "/login",
    element: <h1>Please Login</h1>, // halaman sederhana untuk login
  },
]);

// -----------------------------
// Root App Component
// -----------------------------
function App() {
  // RouterProvider = komponen yang memberikan router ke seluruh aplikasi
  return <RouterProvider router={router} />;

  // Catatan:
  // Kita bisa juga pakai cara lama dengan <BrowserRouter> dan <Routes> seperti di bawah ini
  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path='/' element={<Home />} />
  //       <Route path='/about' element={<About />} />
  //     </Routes>
  //   </BrowserRouter>
  // );
}

export default App;
