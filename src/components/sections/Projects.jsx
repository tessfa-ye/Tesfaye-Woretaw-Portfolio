import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* === Project 1 === */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-4">
                Real-Time Messaging App
              </h3>
              <p className="text-gray-400 mb-4">
                A modern full-stack mobile chat app built with real-time
                messaging, file sharing, online/offline status, profile
                management, and read receipts.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["Flutter", "Node.js", "Express", "Firebase", "Socket.IO"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
              {/* 👇 Sample images for this project */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  "chat.jpg",
                  "chat2.jpg",
                  "chat3.jpg",
                  "chat4.jpg",
                  "chat5.jpg",
                ].map((img) => (
                  <img
                    key={img}
                    src={`/${img}`}
                    alt="Project preview"
                    className="w-full h-24 object-cover rounded-lg border border-white/10 hover:scale-105 transition-transform"
                  />
                ))}
              </div>
              <div className=" py-6 flex justify-between items-center mb-4">
                <a
                  href="https://github.com/tessfa-ye/we-chat"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* === Project 2 === */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-4">E-Commerce Platform</h3>
              <p className="text-gray-400 mb-4">
                A full-featured e-commerce platform with Next.js and Firebase,
                including cart, authentication, and responsive UI.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["Next.js", "Firebase", "Tailwind CSS"].map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              {/* 👇 Sample images for this project */}
              <div className=" gap-2">
                {["e-commerce.jpeg"].map((img) => (
                  <img
                    key={img}
                    src={`/${img}`}
                    alt="E-commerce preview"
                    className="w-full h-55 object-cover rounded-lg border border-white/10 hover:scale-105 transition-transform"
                  />
                ))}
              </div>
              <div className="p-6 flex justify-between items-center mb-4">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* === Project 3 === */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-4">
                MyFitness – Health & Workout Tracker
              </h3>
              <p className="text-gray-400 mb-4">
                A responsive fitness tracking app to log workouts, monitor
                progress, and stay motivated with interactive charts.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["Flutter", "Dart", "Node.js", "MongoDB"].map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* 👇 Sample images for this project */}
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {[
                  "fit5.jpg",
                  "fit3.jpg",
                  "fit4.jpg",
                  "fit.jpg",
                  "fit2.jpg",
                  "fit1.jpg",
                ].map((img) => (
                  <img
                    key={img}
                    src={`/${img}`}
                    alt="MyFitness preview"
                    className="w-full h-24 object-cover rounded-lg border border-white/10 hover:scale-105 transition-transform"
                  />
                ))}
              </div>

              <div className=" py-6 flex justify-between items-center mb-4">
                <a
                  href="https://github.com/tessfa-ye/my-fitness"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
