import { useSidebar } from "../../context/SidebarContext";
import Button from "@mui/material/Button";
export default function Header() {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="h-14 flex items-center justify-between px-4 bg-white dark:bg-gray-800 border-b">
      <Button variant="contained" onClick={toggleSidebar}>
        ☰
      </Button>
      <Button variant="contained">Admin Panel</Button>
    </header>
  );
}
