import { Outlet } from "react-router-dom";
import Sidebar from "../components/ui/Sidebar";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";

export default function AdminLayout({ children }) {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-slate-50">
          {children}
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
