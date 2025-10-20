import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-16">
      <div className="text-center max-w-6xl mx-auto">
        &copy; {new Date().getFullYear()} Tesfaye Woretaw. All rights reserved.
      </div>
    </footer>
  );
};
