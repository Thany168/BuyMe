import { NavLink } from "react-router-dom";
import { useSidebar } from "../../context/SidebarContext";
import clsx from "clsx";

//Meterail Icons import section
import DashboardIcon from "@mui/icons-material/Dashboard";
import InventoryIcon from "@mui/icons-material/Inventory";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import PaymentIcon from "@mui/icons-material/Payment";
export default function Sidebar() {
  const { collapsed, isMobile, open, closeSidebar } = useSidebar();
  const isCollapsed = isMobile ? false : collapsed;
  return (
    <>
      {" "}
      {/* Mobile backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={closeSidebar}
        />
      )}
      <aside
        className={`
          fixed md:static z-50 h-full
          bg-slate-900 text-white
          transition-all duration-300
          
          ${isCollapsed ? "md:w-20" : "md:w-64"}
          ${open ? "translate-x-0 w-[250px]" : "-translate-x-full"}
          
          md:translate-x-0
        `}
      >
        <div className="h-14 flex items-center justify-center font-bold border-b text-amber-50">
          {collapsed ? "POS" : "POS Admin"}
        </div>

        <nav className="p-2 space-y-1">
          <SidebarItem
            to="/"
            label="Product Management"
            collapsed={collapsed}
            icon={<DashboardIcon />}
          />
          <SidebarItem
            to="/stocks"
            label="Stock Management"
            collapsed={collapsed}
            icon={<InventoryIcon />}
          />
          <SidebarItem
            to="/transaction"
            label="Transaction Management"
            collapsed={collapsed}
            icon={<PaymentIcon />}
          />
          <SidebarItem
            to="/employee"
            label="Employee Management"
            collapsed={collapsed}
            icon={<PeopleOutlineIcon />}
          />
        </nav>
      </aside>
    </>
  );
}

function SidebarItem({ to, label, collapsed, icon }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        clsx(
          "flex items-center p-2 rounded-md text-sm font-medium transition",
          collapsed ? "justify-center" : "gap-3",
          isActive
            ? "bg-amber-700 text-white"
            : "hover:bg-gray-700 text-amber-50/70 hover:text-white",
        )
      }
    >
      <div className="flex items-center justify-center w-6">{icon}</div>
      {!collapsed && <span>{label}</span>}
    </NavLink>
  );
}
