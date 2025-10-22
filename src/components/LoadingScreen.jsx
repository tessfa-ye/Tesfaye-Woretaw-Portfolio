import React, { useEffect } from "react";

export const LoadingScreen = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 1000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center text-white">
      <div className="star-spinner mb-6"></div>
      <p className="text-lg font-mono tracking-wide">Loading...</p>
    </div>
  );
};
