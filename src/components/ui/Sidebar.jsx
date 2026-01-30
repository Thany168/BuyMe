import { NavLink } from "react-router-dom";
import { useSidebar } from "../../context/SidebarContext";
import clsx from "clsx";

export default function Sidebar() {
  const { collapsed, isMobile } = useSidebar();

  return (
    <aside
      className={clsx(
        "bg-white dark:bg-gray-800 border-r transition-all duration-300",
        collapsed ? "w-16" : "w-64",
        isMobile && "fixed z-40 h-full",
      )}
    >
      <div className="h-14 flex items-center justify-center font-bold border-b">
        {collapsed ? "POS" : "POS Admin"}
      </div>

      <nav className="p-2 space-y-1">
        <SidebarItem to="/" label="Dashboard" collapsed={collapsed} />
        <SidebarItem to="/products" label="Products" collapsed={collapsed} />
        <SidebarItem to="/orders" label="Orders" collapsed={collapsed} />
      </nav>
    </aside>
  );
}

function SidebarItem({ to, label, collapsed }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        clsx(
          "flex items-center gap-3 p-2 rounded-md text-sm font-medium transition",
          isActive
            ? "bg-blue-600 text-white"
            : "hover:bg-gray-200 dark:hover:bg-gray-700",
        )
      }
    >
      <span className="w-6 text-center">•</span>
      {!collapsed && <span>{label}</span>}
    </NavLink>
  );
}
