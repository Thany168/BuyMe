import { createContext, useContext, useEffect, useState } from "react";

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [open, setOpen] = useState(false); // Mobile sidebar state
  const [isMobile, setIsMobile] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null);

  // New State: Tracks which dropdowns are open (e.g., { stock: true, product: false })
  const [openMenus, setOpenMenus] = useState({});

const toggleDropdown = (menu) => {
  setExpandedMenu((prev) => (prev === menu ? null : menu));
};

  const openSidebar = () => setOpen(true);
  const closeSidebar = () => setOpen(false);
  const toggleMobileSidebar = () => setOpen((prev) => !prev);
  const toggleSidebar = () => setCollapsed((prev) => !prev);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <SidebarContext.Provider
      value={{
        collapsed,
        toggleSidebar,
        open,
        toggleMobileSidebar,
        closeSidebar,
        openSidebar,
        isMobile,
        // Dropdown exports
        openMenus,
        toggleDropdown,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext);