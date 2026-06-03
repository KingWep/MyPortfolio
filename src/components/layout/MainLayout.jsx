import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Loader from "../../sections/Loader";
import Navbar from "./Navbar";
import Particles from "../../sections/Particles";
import { Toaster } from "../ui/sonner";

export default function MainLayout() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <Loader />
      <Particles />

      <Navbar />

      <main className="relative z-10 pt-[var(--nav-offset)]">
        <Outlet />
      </main>

      <Footer />
      <Toaster />
    </div>
  );
}