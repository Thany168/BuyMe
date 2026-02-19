import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSidebar } from "../../context/SidebarContext";
import clsx from "clsx";

// Icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import InventoryIcon from "@mui/icons-material/Inventory";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import PaymentIcon from "@mui/icons-material/Payment";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function Sidebar() {
  const { collapsed, isMobile, open, closeSidebar } = useSidebar();
  const isCollapsed = isMobile ? false : collapsed;

  // ✅ Local dropdown state (this is the fix)
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdown = (menu) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  return (
    <>
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
          ${open ? "translate-x-0 w-[250px]" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* Header */}
        <div className="h-14 flex items-center justify-center font-bold border-b text-amber-50">
          {isCollapsed ? "POS" : "POS Admin"}
        </div>

        <nav className="p-2 space-y-1">
          {/* Product */}
          <SidebarItem
            to="/"
            label="Product Management"
            collapsed={isCollapsed}
            icon={<DashboardIcon />}
          />

          {/* 🔥 STOCK MANAGEMENT DROPDOWN */}
          <div>
            <button
              onClick={() => handleDropdown("stock")}
              className={clsx(
                "w-full flex items-center p-2 rounded-md text-sm font-medium transition",
                isCollapsed ? "justify-center" : "justify-between",
                openDropdown === "stock"
                  ? "bg-amber-700 text-white"
                  : "hover:bg-gray-700 text-amber-50/70 hover:text-white"
              )}
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-6">
                  <InventoryIcon />
                </div>
                {!isCollapsed && <span>Stock Management</span>}
              </div>

              {!isCollapsed && (
                <ExpandMoreIcon
                  className={clsx(
                    "transition-transform duration-300",
                    openDropdown === "stock" && "rotate-180"
                  )}
                />
              )}
            </button>

            {/* ✅ Animated Dropdown */}
            <div
              className={clsx(
                "overflow-hidden transition-all duration-300",
                openDropdown === "stock"
                  ? "max-h-60 opacity-100"
                  : "max-h-0 opacity-0"
              )}
            >
              <div className="mt-1 ml-6 space-y-1 border-l border-gray-700">
                <SubItem className="text-xs text-white font-bold" to="/stocks/stockin/out" label="StockIn/Out" />
                <SubItem to="/stocks/managestock" label="Manage Stock" />
                <SubItem to="/stocks/reportstock" label="Report Stock" />
              </div>
            </div>
          </div>

          {/* Transaction */}
          <SidebarItem
            to="/transaction"
            label="Transaction Management"
            collapsed={isCollapsed}
            icon={<PaymentIcon />}
          />

          {/* Employee */}
          <SidebarItem
            to="/employee"
            label="Employee Management"
            collapsed={isCollapsed}
            icon={<PeopleOutlineIcon />}
          />
        </nav>
      </aside>
    </>
  );
}

// Sub Item
function SubItem({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        clsx(
          "flex items-center gap-2 p-2 pl-4 rounded-md text-xs transition",
          isActive
            ? "text-amber-700 font-bold bg-amber-50"
            : "text-amber-50/60 hover:text-white"
        )
      }
    >
      <ChevronRightIcon sx={{ fontSize: 12 }} />
      {label}
    </NavLink>
  );
}

// Main Item
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
            : "hover:bg-gray-700 text-amber-50/70 hover:text-white"
        )
      }
    >
      <div className="flex items-center justify-center w-6">{icon}</div>
      {!collapsed && <span>{label}</span>}
    </NavLink>
  );
}
