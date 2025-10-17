import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-16">
      <div className="text-center max-w-6xl mx-auto">
        &copy; {new Date().getFullYear()} Tesfaye Woretaw. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
