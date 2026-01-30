import { useSidebar } from "../../context/SidebarContext";

export default function Header() {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="h-14 flex items-center justify-between px-4 bg-white dark:bg-gray-800 border-b">
      <button
        onClick={toggleSidebar}
        className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        ☰
      </button>

      <span className="text-sm font-medium bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-amber-50">
        Admin Panel
      </span>
    </header>
  );
}
