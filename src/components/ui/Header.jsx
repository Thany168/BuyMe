import { useSidebar } from "../../context/SidebarContext";
export default function Header() {
  const { toggleSidebar, toggleMobileSidebar } = useSidebar();

  return (
    <header className="h-14  flex items-center justify-between px-4 bg-white dark:bg-gray-800">
      {/* Mobile toggle */}
      <div>
        <button className="md:hidden text-white" onClick={toggleMobileSidebar}>
          ☰
        </button>

        {/* Desktop toggle */}
        <button className="hidden md:block text-white" onClick={toggleSidebar}>
          ☰
        </button>
      </div>
      <div className="flex items-center space-x-3 ">
        <span className="text-white">Username : Static</span>
        <img
          className="w-[40px] h-[40px] rounded-full"
          src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg?semt=ais_hybrid&w=740&q=80"
          alt="userrProfile"
        />
      </div>
    </header>
  );
}
