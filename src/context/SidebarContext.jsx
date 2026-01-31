import { createContext, useContext, useEffect, useState } from "react";

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [open, setOpen] = useState(false); //I create this derm3 control state mobile screen
  const [isMobile, setIsMobile] = useState(false);
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
        toggleSidebar,
        closeSidebar,
        openSidebar,
        isMobile,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext);
