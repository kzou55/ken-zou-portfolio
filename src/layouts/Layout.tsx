import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-16">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
