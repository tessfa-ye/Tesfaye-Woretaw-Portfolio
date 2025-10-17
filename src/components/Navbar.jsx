import { useEffect } from "react";

export const NavBar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 z-40 w-full bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className=" mx-w-5xl mx-auto px-4">
        {/* FLEX CONTAINER — keeps logo, menu icon, and links on one line */}
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <a href="#home" className="font-mono text-xl font-bold text-white">
            {""}
            <span className="text-green-500">T</span>
            {""}
            <span className="text-blue-500">W</span>
            {""}
          </a>
          {/* Desktop Links */}
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className=" text-gray-300 hover:text-white transition-colors"
            >
              {""} Home{""}
            </a>
            <a
              href="#about"
              className=" text-gray-300 hover:text-white transition-colors"
            >
              {""} About{""}
            </a>
            <a
              href="#projects"
              className=" text-gray-300 hover:text-white transition-colors"
            >
              {""} Projects{""}
            </a>
            <a
              href="#contact"
              className=" text-gray-300 hover:text-white transition-colors"
            >
              {""} Contact{""}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
